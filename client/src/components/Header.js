//전체 레이아웃이 되는 헤더 컴포넌트입니다.
import React from "react";
//스타일드컴포너트를 사용해서 css사용했습니다.
import styled from "styled-components";
//localStorage.getItem를 불러옴
import { getLocalStorage } from "./localStorage";

export default function Header() {
  //헤더 부분에 조건부 렌더링을 위해 localstorage에서 "name"이라는 키에 저장되어 있는 username를 name 이라는 변수값으로 할당합니다.
  const name = getLocalStorage("name");
  return (
    <>
      {/* 로그인을 성공해서 위에 선언된 변수 name값이 있다면, 헤더에 name_Login Project가 렌더링이 되고,
           로그 아웃을 하면 헤더에 Login Project가 렌더링 됩니다. */}
      {name ? (
        <HeaderContainer>
          <img className="logo_img" alt="logo" src="Image/woman.png"></img>
          <Name>{name}_Login Project</Name>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <img className="logo_img" alt="logo" src="Image/woman.png"></img>
          <Name>Login Project</Name>
        </HeaderContainer>
      )}
    </>
  );
}
const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0.3rem 3rem;
  border: 1px solid transparent;
  background-color: #96a5ff;
  .logo_img {
    border-radius: 100%;
    height: 66px;
    padding: 3px;
  }
`;
const Name = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;
