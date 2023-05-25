/** 초기 환경을 구성할 때, 터미널로 express,nodemon,dotenv,cors,jsonwebtoken,cookie-parser 모듈들을 install함*/

//require()는 module.exports를 리턴합니다. 즉 Node.js에서는 모듈을 불러오기 위해 require()함수를 씁니다.

// express서버를 구현하기 위해 express모듈을 불러와서 express 변수값으로 할당
const express = require("express");

//.env 파일에 저장해놓은 환경 변수들을 읽어오기 위해 dotenv 라이브러리를 불러와서 dotenv 변수값으로 할당
const dotenv = require("dotenv");

//cookie-parser middleware를 불러와서 cookieParser 변수값으로 할당
const cookieParser = require("cookie-parser");

//cors 설정을 위해 cors미들웨어를 불러와서 cors 변수값으로 할당
const cors = require("cors");

//controller의 index.js안에 login함수와 logout함수를 객체 구조분해 할당으로 가져옵니다.
const { login, logout } = require("./controller");

/**여기서 app은 어플리케이션이라고 하고 즉 express의 인스턴스입니다.
 * app 객체는 express() 메소드 호출로 생성되는 express 서버 객체를 의미합니다.
 * 이 서버객체가 갖는 메소드로 서버의 일을 처리합니다.   */
//express app 객체를 생성
const app = express();

//현재 디렉토리의 .env파일을 자동으로 인식하여 환경변수를 세팅
dotenv.config();

// 여기서부터 끝 부분까지는 기본 설정을 위해 작성한 코드입니다.

// JSON 형태의 요청 body를 파싱하기 위해 express.json() 미들웨어를 사용
app.use(express.json());

//express에서 cookie-parser를 활성화
app.use(cookieParser());

//클라이언트와 서버간 origin이 다른 상황에서 통신하기 위해 cors를 활성화
app.use(
  cors({
    // 접근을 허용하는 특정 도메인
    origin: "http://localhost:3000",
    // HTTP methods는 GET, POST를 허용
    methods: ["GET", "POST"],
    // 쿠키를 사용할 것이기 때문에, 응답 헤더에 Access-Control-Allow-Credentials 추가
    credentials: true,
  })
);

//app.post(경로, 콜백함수)를 이용해서 post방식으로 넘어온 데이터를 받습니다.
// HTTP methods는 POST, 경로는 "/login", 위에 구조분해할당으로 가져온 login함수
app.post("/login", login);
// HTTP methods는 POST, 경로는 "/logout", 위에 구조분해할당으로 가져온 logout함수
app.post("/logout", logout);

//app.listen으로 바로 서버 실행
//process.env[key] : .env파일에 키가 PORT인 값을 가져옵니다. 서버가 계속 켜져있는지 터미널의 nodemon으로 확인하기 위해서 작성하였습니다.
app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
