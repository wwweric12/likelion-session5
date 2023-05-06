import { useState } from "react";
import logo from "../assets/image/icon_logo.png";
import styled from "styled-components";

const Main = ({ login }) => {
  const handleClick = () => {
    login();
  };

  return (
    <>
      <button onClick={handleClick}>로그인</button>
    </>
  );
};

export default Main;
