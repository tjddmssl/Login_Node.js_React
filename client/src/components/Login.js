import React, { useState } from "react";
//스타일드컴포너트를 사용해서 css사용했습니다.
import styled from "styled-components";
//서버와 axios를 사용해서 통신했습니다.
import axios from "axios";
//localStorage.setItem메소드를 불러옴
import { setLocalStorage } from "./localStorage";

export default function Login() {
  //email값을 저장할 useState
  const [email, setEmail] = useState("");

  //password 저장할 useState
  const [password, setPassword] = useState("");

  //input값인 email을 useState로 상태를 저장하는 핸들러함수입니다.
  const changeIdHandler = (e) => {
    setEmail(e.target.value);
  };

  //input값인 password을 useState로 상태를 저장하는 핸들러함수입니다.
  const changePwdHandler = (e) => {
    setPassword(e.target.value);
  };

  //LogIn버튼을 누르면 호출하는 함수입니다.
  const login = () => {
    //서버와 통신하기 위해 axios를 사용했습니다.
    axios({
      //서버의 api주소는 http://localhost:8122/login이고
      url: "http://localhost:8122/login",
      //서버에게 HTTP method  "POST"로 보냅니다.
      method: "POST",
      // withCredentials: true는  CORS 요청에 쿠키값을 넣어준 부분입니다.
      withCredentials: true,
      //로그인때 입력받은 email, password를 data로 서버어게 보내줍니다.
      data: {
        email: email,
        password: password,
      },
    })
      //axios로 서버에게 post를 하고
      .then((result) => {
        //서버에서 넘겨주는 상태코드가 200번이라면 (서버에게 요청이 성공함)
        if (result.status === 200) {
          // 서버에서 넘겨주는 데이터를 result로 받아서 result안에 result.data의 username를 localstorage에 저장합니다.
          setLocalStorage("name", result.data);
          // 그다음 로그아웃 컴포넌트로 이동합니다.
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

// 화면의 중앙에 위치
const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
  width: 500px;
  box-shadow: 0 0 0 4px hsla(241, 54%, 88%, 0.65);
  border-radius: 5px;
`;

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
