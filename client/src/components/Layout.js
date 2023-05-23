import React from "react";
//스타일드컴포너트를 사용해서 css사용했습니다.
import styled from "styled-components";
/**Outlet은 중첩 라우팅을 통해 상위 컴포넌트를 레이아웃화 할 수 있고 {children}을 사용하는 것과 같은 효과가 납니다.
 * 전체적으로 Header컴포넌트를 레이아웃으로 되도록 코드를 작성하였습니다.
 */
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Container>
        <main className="main">
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  .main {
    width: 100%;
    height: calc(100vh - 50px);
  }
`;
