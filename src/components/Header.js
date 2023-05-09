import React from "react";
import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
export default function Header({ login }) {
  const handleClick = () => {
    login();
  };
  return (
    <HeaderContainer>
      <HeaderUl>
        <li>
          <TitleLogo />
        </li>
        <li>
          <HeaderButton>영화</HeaderButton>
        </li>
        <li>
          <HeaderButton>TV</HeaderButton>
        </li>
        <li>
          <HeaderButton>책</HeaderButton>
        </li>
        <li>
          <HeaderButton>웹툰</HeaderButton>
        </li>
        <li>
          <HeaderForm>
            <HeaderInput placeholder="콘텐츠,인물,컨텐츠,유저를 검색해보세요"></HeaderInput>
          </HeaderForm>
        </li>
        <li>
          <HeaderButton onClick={handleClick}>로그인</HeaderButton>
        </li>
        <li>
          <SignUpButton>회원가입</SignUpButton>
        </li>
      </HeaderUl>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px gray;
  z-index: 3;
  background-color: white;
`;

const TitleLogo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 151px;
  height: auto;
`;

const HeaderUl = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin: 10px;
  }
`;

const HeaderForm = styled.form`
  width: 100%;
  height: 40px;
  margin-left: 250px;
`;

const HeaderInput = styled.input`
  background-color: #f5f5f7;
  border: none;
  width: 300px;
  height: 40px;
  padding: 7px 10px 8px 36px;
`;

const HeaderButton = styled.button`
  width: auto;
  height: 40px;
  background-color: transparent;
  border: none;
  flex-wrap: nowrap;
`;

const SignUpButton = styled.button`
  width: auto;
  height: 40px;
  padding: 5px 12px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 3px;
  font-weight: bold;
  font-size: 13px;
`;
