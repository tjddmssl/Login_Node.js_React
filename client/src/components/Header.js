import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <img className="logo_img" alt="logo" src="Image/woman.png"></img>
        <Name>Lee Sung Eun</Name>
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
