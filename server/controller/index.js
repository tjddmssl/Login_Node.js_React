//Database.js의 모듈(유저정보)을 불러와서 userDatabase 변수값으로 할당
const userDatabase = require("../Database");

//jsonwebtoken모듈을 불러와서 jwt 변수값으로 할당
const jwt = require("jsonwebtoken");

//클라이언트로부터 로그인 요청의(HTTP methods는 POST, 경로는 "/login") 콜백함수 login입니다.
const login = (req, res) => {
  //
  const { email } = req.body;

  //Database에 저장되어 있는 유저 정보들 중
  const userInfo = userDatabase.filter((item) => {
    return item.email === email;
  })[0];

  if (!userInfo) {
    res.status(403).json("Not Authorized");
  } else {
    try {
      // access Token 발급
      const accessToken = jwt.sign(
        {
          username: userInfo.username,
          email: userInfo.email,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "24h",
          issuer: "About Tech",
        }
      );

      // refresh Token 발급
      const refreshToken = jwt.sign(
        {
          username: userInfo.username,
          email: userInfo.email,
        },
        process.env.REFRECH_SECRET,
        {
          expiresIn: "24h",
          issuer: "About Tech",
        }
      );

      /**res.cookie(키, 값, 옵션) 형식으로 쿠키 생성합니다.
       * secure 옵션은 HTTPS 프로토콜에서만 쿠키 전송 여부 결정,
       * httpOnly 옵션은 스크립트의 쿠키 접근 가능 여부 결정하는 옵션으로 true면 접근 불가능, 기본값은 false입니다.
       */
      //
      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true,
      });

      res.status(200).json(userInfo.username);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

const logout = (req, res) => {
  try {
    res.cookie("accessToken", "");
    res.cookie("refreshToken", "");
    res.status(200).json("Logout Success");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  login,
  logout,
};
