# Login_Node.js_React
### 테스트 전에,
- **client파일과 server파일을 각각 `npm install`해주세요.**
- **client파일과 server파일을 각각 `npm run start`해주세요.**
- **각각 코드 해셕에 대한 주석은 그 해당 코드 바로 위에 작성하였습니다.**
### 로그인 아이디, 비밀번호
- 🐥**DB에 저장 된 email와 password로 로그인 테스트 진행해주세요** 🐥
  - email: danbi6485@gmail.com , password: 123
  - email: user@gmail.com , password: 123
### 기능 구현
- server는 **Node.js**로 구현하였고, client는 React를 사용하였습니다.
- 로그인 요청시 server에서는 JWT(accessToken,refreshToken)를 생성하고, JWT와 DB의 username을 쿠키 값으로 클라이언트에게 전달합니다.
  client에서는 server에서 전달한 username을 localstorage에 담아 필요한 곳에 사용합니다.
- 로그아웃 요청시 client의 쿠키값에 있는 JWT(accessToken,refreshToken)이 삭제됩니다. 더불어 client의ㅣ localstorage에 username도 같이 삭제됩니다.
- **로그인 후, React-router를 사용하여 페이지를 이동했습니다.**
- **⭐페이지 이동 후, 로그아웃을 하지않은 상태에서 브라우저 종료 후, 그 페이지로 재진입시 기존 로그인을 유지합니다.⭐**
- **⭐유지하고 있는 로그인은 로그아웃 버튼을 클릭해야 로그 아웃이 됩니다.⭐**
### 화면 구현
#### 로그인 화면 (메인 화면)
![스크린샷, 2023-05-26 05-15-13](https://github.com/tjddmssl/Login_Node.js_React/assets/115976700/05e5768a-2282-406e-a73a-40c2fd064225)
#### 로그아웃 화면 (로그인 후)
- email: danbi6485@gmail.com , password: 123 로그인 진행시,
![스크린샷, 2023-05-26 04-45-30](https://github.com/tjddmssl/Login_Node.js_React/assets/115976700/71d4aebb-7a89-44a4-a7a8-9286b49b25e0)
