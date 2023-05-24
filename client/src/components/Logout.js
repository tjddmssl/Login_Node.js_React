import React from "react";
//서버와 axios를 사용해서 통신했습니다.
import axios from "axios";
//스타일드컴포너트를 사용해서 css사용했습니다.
import styled from "styled-components";
//localStorage.getItem와  localStorage.removeItem 를 불러옴
import { getLocalStorage, removeLocalStorage } from "./localStorage";

export default function Logout() {
  /**LogOut버튼을 누르면 서버에게 post요청이 가고,
   * 서버에서는 클라이언트의 쿠키에 저장되어 있는 accessToken과 refreshToken를 비웁니다.
   * 클라이언트에서는 localstorage에서 username를 삭제합니다.
   * 즉 더이상 로그인상태가 유지되지 않습니다.*/

  //LogOut버튼을 누르면 호출하는 함수입니다.
  const logout = () => {
    //서버와 통신하기 위해 axios를 사용했습니다.
    axios({
      //서버의 api주소는 http://localhost:8122/logout이고
      url: "http://localhost:8122/logout",
      //서버에게 HTTP method  "POST"로 보냅니다.
      method: "POST",
      // withCredentials: true는  CORS 요청에 쿠키값을 넣어준 부분입니다.
      withCredentials: true,
    })
      //axios로 서버에게 post를 하고
      .then((result) => {
        //서버에서 넘겨주는 상태코드가 200번이라면 (서버에게 요청이 성공함)
        if (result.status === 200) {
          //localstorage에서 "name"이라는 키에 저장되어 있는 username를 삭제합니다.
          removeLocalStorage("name");
          //다시 처음 로그인 화면으로 갑니다
          window.location.replace("/");
        }
      });
  };

  //화면에 누가 로그인했는지 띄울려고 localstorage에서 "name"이라는 키에 저장되어 있는 username를 가져옵니다
  const name = getLocalStorage("name");

  return (
    <Positioner>
      <ShadowedBox>
        <LogoWrapper>
          <Logo>Infrachip</Logo>
        </LogoWrapper>
        <Container>
          {/* 위에 name값이 화면에 나오도록 구현했습니다. */}
          <Name>{name} 님이 로그인했습니다.</Name>
          {/*LogOut버튼을 누르면 온클릭 이벤트가 발생해서 위에 선언해놓은 logout함수가 실행됩니다. */}
          <Button onClick={logout}>LogOut</Button>
        </Container>
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
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.3rem;
  color: #646970;
`;
