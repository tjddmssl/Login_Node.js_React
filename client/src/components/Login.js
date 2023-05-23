import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { setLocalStorage } from "./localStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState({});
  const changeIdHandler = (e) => {
    setEmail(e.target.value);
  };
  const changePwdHandler = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    axios({
      url: "http://localhost:8122/login",
      method: "POST",
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    }).then((result) => {
      if (result.status === 200) {
        console.log(result.data);
        setLocalStorage("name", result.data);
        window.location.replace("/logout");
      }
    });
  };

  return (
    <Positioner>
      <ShadowedBox>
        <LogoWrapper>
          <Logo>Infrachip</Logo>
        </LogoWrapper>
        <InputContainer>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={changeIdHandler}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePwdHandler}
          />
          <Button onClick={login}>LogIn</Button>
        </InputContainer>
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
  border-radius: 5px;
`;

// 로고
const LogoWrapper = styled.div`
  border-radius: 5px 5px 0 0px;
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

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin: 1rem;
  color: #646970;
  &:focus {
    outline: none;
    border-color: #96a5ff;
    box-shadow: 0 0 0 4px hsla(241, 54%, 88%, 0.65);
  }
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
`;
