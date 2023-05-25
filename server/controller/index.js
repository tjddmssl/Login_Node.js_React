//Database.js의 모듈(유저정보)을 불러와서 userDatabase 변수값으로 할당
const userDatabase = require("../Database");

//jsonwebtoken모듈을 불러와서 jwt 변수값으로 할당
const jwt = require("jsonwebtoken");

//클라이언트로부터 로그인 요청의(HTTP methods는 POST, 경로는 "/login") 콜백함수 login입니다.
const login = (req, res) => {
  //req.body : 'request body'에 'key-value'의 데이터가 담긴 객체 프로퍼티, JSON 객체에 접근 가능
  //클라이언트가 보낸 HTTP request body값의 email를 객체구조분해 할당으로 가져옴
  const { email } = req.body;

  //Database에 저장되어 있는 유저 정보들 중 클라이언트가 보낸 email값과 Database의 email값이 같은 유저정보를 filter해서 userInfo변수값에 할당합니다.
  const userInfo = userDatabase.filter((item) => {
    return item.email === email;
  })[0];

  //만약 Database에 저장되어 있는 유저정보들 중 email값과 클라이언트가 보낸 email값이 동일한게 없다면,
  if (!userInfo) {
    //HTTP 상태 코드 403과 "Not Authorized" JSON 형식의 응답을 클라이언트에게 보냅니다
    res.status(403).json("Not Authorized");
  } else {
    //만약 Database에 저장되어 있는 유저정보들 중 email값과 클라이언트가 보낸 email값이 동일한게 있다면,
    try {
      // accessToken 발급해서 accessToken변수값으로 할당합니다.
      //jsonwebtoken의 내장함수인 sign함수를 사용하여, jwt.sign(어떤 유저 정보를 담을지, 시크릿 키, 옵션) 작성했습니다.
      const accessToken = jwt.sign(
        //accessToken에 담을 유저정보
        {
          username: userInfo.username,
          email: userInfo.email,
        },
        // .env파일에 있는 accessToken 시크릿 키를 가져옵니다.
        process.env.ACCESS_SECRET,
        // 옵션으로 accessToken의 유효기간, 발행자를 작성했습니다.
        {
          expiresIn: "24h",
          issuer: "LeeSungEun",
        }
      );

      // refreshToken 발급해서 refreshToken변수값으로 할당합니다.
      //jsonwebtoken의 내장함수인 sign함수를 사용하여, jwt.sign(어떤 유저 정보를 담을지, 시크릿 키, 옵션) 작성했습니다.
      const refreshToken = jwt.sign(
        //refreshToken에 담을 유저정보
        {
          username: userInfo.username,
          email: userInfo.email,
        },
        // .env파일에 있는 refreshToken 시크릿 키를 가져옵니다.
        process.env.REFRECH_SECRET,
        // 옵션으로 refreshToken의 유효기간, 발행자를 작성했습니다.
        {
          expiresIn: "24h",
          issuer: "LeeSungEun",
        }
      );

      /**res.cookie(키, 값, 옵션) 형식으로 쿠키 생성합니다.
       * secure 옵션은 HTTPS 프로토콜에서만 쿠키 전송 여부 결정,
       * httpOnly 옵션은 스크립트의 쿠키 접근 가능 여부 결정하는 옵션으로 true면 접근 불가능, 기본값은 false입니다.
       */

      //"accessToken"키값으로 accessToken을 쿠키에 담은,
      // HTTPS 프로토콜외에도 쿠키를 전송하고,  스크립트의 쿠키 접근은 불가능한 옵션을 준,
      // 쿠키를 생성해서 클라이언트에게 응답으로 보냅니다.
      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: true,
      });

      //"refreshToken"키값으로 refreshToken을 쿠키에 담은,
      // HTTPS 프로토콜외에도 쿠키를 전송하고,  스크립트의 쿠키 접근은 불가능한 옵션을 준,
      // 쿠키를 생성해서 클라이언트에게 응답으로 보냅니다.
      res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true,
      });

      //HTTP 상태 코드 200과 Database에 저장되어 있는 유저정보 중 username를 JSON 형식의 응답으로 클라이언트에게 보냅니다
      res.status(200).json(userInfo.username);
    } catch (error) {
      // 클라이언트의 요청은 올바르지만, 서버의 에러라면 HTTP 상태 코드 500과 error내용을 JSON 형식의 응답으로 클라이언트에게 보냅니다
      res.status(500).json(error);
    }
  }
};

//클라이언트로부터 로그아웃 요청의(HTTP methods는 POST, 경로는 "/logout") 콜백함수 logout입니다.
const logout = (req, res) => {
  //클라이언트로부터 로그아웃 요청시 응답으로
  try {
    //"accessToken"키값으로 빈값이 담긴 쿠기를 쿠키를 생성해서 클라이언트에게 응답으로 보냅니다.
    res.cookie("accessToken", "");
    //"refreshToken"키값으로 빈값이 담긴 쿠키를 생성해서 클라이언트에게 응답으로 보냅니다.
    res.cookie("refreshToken", "");
    // HTTP 상태 코드 200과 "Logout Success" JSON 형식의 응답을 클라이언트에게 보냅니다
    res.status(200).json("Logout Success");
  } catch (error) {
    // 클라이언트의 요청은 올바르지만, 서버의 에러라면 HTTP 상태 코드 500과 error내용을 JSON 형식의 응답으로 클라이언트에게 보냅니다
    res.status(500).json(error);
  }
};

//각각의 login함수와 logout함수를 모듈화해서 내보내서, 다른 파일에서 두 함수를 콜백함수로 사용합니다.
module.exports = {
  login,
  logout,
};
