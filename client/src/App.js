import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Layout from "./components/Layout";
//localStorage.getItem를 불러옴
import { getLocalStorage } from "./components/localStorage";
function App() {
  /** 새로고침해서 로그인 유지를 위해 토큰을 사용할까 했지만, 토큰을 서버에서 클라이언트의 쿠키에 저장하게 보내주고, 
  토큰자체를 localstorage에 저장하는 것은 보안상 좋지 않아서, 유저의 정보를 이용해서 로그인유지에 사용했습니다.*/

  /** components파일안에 localStorage.js 컴포넌트를 만들어 localStorage메서드에 대한 코드중복을 피했습니다. */

  /**getLocalStorage는 localStorage의 getItem메소드를 사용한 것입니다.
   * 서버한테 로그인 성공시 받아오는 username를 로컬스토리지에 담았습니다.
   */

  const name = getLocalStorage("name");
  return (
    <>
      {/*리액트 라우터 설정을해서 각 페이지에 url를 만들고, 위에 헤더 부분은 레이아웃으로 계속 있었으면 해서 Layout컴포넌트는 전체적으로 
      중첩 라우터 설정하고, Layout컴포넌트에서 react-router의 Outlet를 사용했습니다.*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* 로그인 유지를 위해 username를 사용했고, username이 있다면 Logout컴포넌트를
       없다면 Login컴포넌트가 보이도록 했습니다.
      localstorage안에 username은 브라우저 창이 꺼져도 지우지 않는 이상 계속 남아있기때문에
      로그아웃하면서 localstorage안에 username을 지우기 전에는 로그인유지가 계속 됩니다.*/}
      {name ? <Logout /> : <Login />}
    </>
  );
}

export default App;
