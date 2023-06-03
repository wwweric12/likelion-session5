import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";

export default function Header({ login, signUp, moviePage, sortHeader }) {
  const isCurrent = sortHeader.pathname.substr(0, 8) === "/movies/";
  const handleClick = (e) => {
    if (e.target.id === "Login") {
      login();
    } else {
      signUp();
    }
  };

  return (
    <HeaderContainer headerColor={moviePage} current={isCurrent}>
      <HeaderUl headerColor={moviePage} current={isCurrent}>
        <li>
          <Link to="/">
            <TitleLogo />
          </Link>
        </li>
        <li>
          <HeaderButton headerColor={moviePage} current={isCurrent}>
            영화
          </HeaderButton>
        </li>
        <li>
          <HeaderButton headerColor={moviePage} current={isCurrent}>
            TV
          </HeaderButton>
        </li>
        <li>
          <HeaderButton headerColor={moviePage} current={isCurrent}>
            책
          </HeaderButton>
        </li>
        <li>
          <HeaderButton headerColor={moviePage} current={isCurrent}>
            웹툰
          </HeaderButton>
        </li>
        <li>
          <HeaderForm>
            <HeaderInput
              headerColor={moviePage}
              placeholder="콘텐츠,인물,컨텐츠,유저를 검색해보세요"
              current={isCurrent}
            ></HeaderInput>
          </HeaderForm>
        </li>
        <li>
          <HeaderButton
            headerColor={moviePage}
            onClick={handleClick}
            current={isCurrent}
            id="Login"
          >
            로그인
          </HeaderButton>
        </li>
        <li>
          <SignUpButton
            headerColor={moviePage}
            current={isCurrent}
            onClick={handleClick}
            id="signUp"
          >
            회원가입
          </SignUpButton>
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
  z-index: ${({ theme }) => theme.Zindex.toAbove};
  background-color: ${(props) =>
    props.headerColor && props.current ? "transparent" : "white"};
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
  width: 300px;
  height: 40px;
  margin-left: 250px;
`;

const HeaderInput = styled.input`
  background-color: ${(props) =>
    props.headerColor && props.current ? "transparent" : "white"};
  border: ${(props) =>
    props.headerColor && props.current
      ? " 2px solid rgba(255, 255, 255, 1.25)"
      : "1px solid black"};
  width: 300px;
  height: 40px;
  padding: 7px 10px 8px 36px;
  font-weight: 900;
  ::placeholder {
    color: ${(props) =>
      props.headerColor && props.current
        ? "rgba(255, 255, 255, 1.25)"
        : "black"};
  }
`;

const HeaderButton = styled.button`
  width: auto;
  height: 40px;
  background-color: transparent;
  border: none;
  flex-wrap: nowrap;
  font-weight: 900;
  font-size: 13px;
  color: ${(props) =>
    props.headerColor && props.current ? "rgba(255, 255, 255, 1.5)" : "black"};
`;

const SignUpButton = styled.button`
  width: auto;
  height: 40px;
  padding: 5px 12px;
  background-color: ${(props) =>
    props.headerColor && props.current ? "transparent" : "white"};
  border: 1px solid
    ${(props) =>
      props.headerColor && props.current
        ? "rgba(255, 255, 255, 1.5)"
        : "black"};
  border-radius: 3px;
  color: ${(props) => (props.headerColor && props.current ? "white" : "black")};
  font-weight: 900;
  font-size: 13px;
`;
