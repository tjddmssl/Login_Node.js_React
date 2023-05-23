import React from "react";
import axios from "axios";
import styled from "styled-components";
import { getLocalStorage, removeLocalStorage } from "./localStorage";
export default function Logout() {
  const logout = () => {
    axios({
      url: "http://localhost:8122/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        removeLocalStorage("name");
        window.location.replace("/");
      }
    });
  };
  const name = getLocalStorage("name");

  return (
    <Positioner>
      <ShadowedBox>
        <LogoWrapper>
          <Logo>Infrachip</Logo>
        </LogoWrapper>
        <Container>
          <div>{name} 님이 로그인했습니다.</div>
          <Button onClick={logout}>Logout</Button>
        </Container>
      </ShadowedBox>
    </Positioner>
  );
}

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
  width: 500px;
  box-shadow: 0 0 0 4px hsla(241, 54%, 88%, 0.65);
`;

// 로고
const LogoWrapper = styled.div`
  background-color: #96a5ff;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  font-weight: 700;
  color: white;
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`;

const Button = styled.button`
  color: white;
  border: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 7px;
  font-weight: 700;
  cursor: pointer;
  background-color: #96a5ff;
  &:hover {
    background-color: hsla(231, 100%, 79%, 0.7);
  }
`;
