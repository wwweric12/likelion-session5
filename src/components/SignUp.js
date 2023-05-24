import React from "react";
import {
  ModalText,
  ModalForm,
  ModalInput,
  ModalButton,
  ModalLink,
} from "./ModalStyle";

export default function SignUp() {
  return (
    <>
      <ModalText>회원가입</ModalText>
      <ModalForm>
        <ModalInput placeholder="이름"></ModalInput>
        <ModalInput placeholder="이메일"></ModalInput>
        <ModalInput placeholder="비밀번호"></ModalInput>
        <ModalButton>회원가입</ModalButton>
      </ModalForm>
      <p>
        이미 가입하셨나요?<ModalLink href="#"> 로그인</ModalLink>
      </p>
    </>
  );
}
