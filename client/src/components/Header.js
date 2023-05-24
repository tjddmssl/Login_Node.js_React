//전체 레이아웃이 되는 헤더 컴포넌트입니다.
import React from "react";
//스타일드컴포너트를 사용해서 css사용했습니다.
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <img className="logo_img" alt="logo" src="Image/woman.png"></img>
        <Name>이성은_Login Project</Name>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 8rem 0 3rem;
  border: 1px solid transparent;
  background-color: #96a5ff;
  .logo_img {
    border-radius: 100%;
    height: 60px;
    padding: 10px;
  }
`;
const Name = styled.button`
  align-items: center;
  height: 52px;
  margin: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  background-color: transparent;
  border: none;
`;
