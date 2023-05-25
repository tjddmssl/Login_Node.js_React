// module이란 특정한 기능을 하는 함수나 변수들의 집합이고, 코드의 길이를 줄이고, 유지보수를 용이하게 할 수 있다는 장점이 있습니다.
//이런 module을 export하기 위해 module.exports를 사용했습니다.
//실제 서버의 Database처럼 로그인할때 유저 정보인 email, password, username만들고, module.exports를 사용했습니다.
module.exports = [
  {
    username: "이성은",
    email: "aaa",
    password: "123",
  },
  {
    username: "이성은2",
    email: "bbb",
    password: "123",
  },
];
