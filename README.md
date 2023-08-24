# Login_Node.js_React
## 로그인 아이디, 비밀번호
  - email: danbi6485@gmail.com , password: 123
  - email: user@gmail.com , password: 123
## 기능 구현
- server는 **Node.js**로 구현하였고, client는 React를 사용
- 로그인 요청시 server에서는 JWT(accessToken,refreshToken)를 생성하고, JWT와 DB의 username을 쿠키 값으로 클라이언트에게 전달
  client에서는 server에서 전달한 username을 localstorage에 담아 필요한 곳에 사용
- 로그아웃 요청시 client의 쿠키값에 있는 JWT(accessToken,refreshToken)이 삭제됩니다. 더불어 client의ㅣ localstorage에 username도 같이 삭제
- **로그인 후, React-router를 사용하여 페이지를 이동**
- **⭐페이지 이동 후, 로그아웃을 하지않은 상태에서 브라우저 종료 후, 그 페이지로 재진입시 기존 로그인을 유지⭐**
- **⭐유지하고 있는 로그인은 로그아웃 버튼을 클릭해야 로그 아웃이 됩니다.⭐**

