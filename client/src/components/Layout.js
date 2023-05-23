import React from "react";
import styled from "styled-components";
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
