import {
  ModalText,
  ModalForm,
  ModalInput,
  ModalButton,
  ModalLink,
} from "./ModalStyle";

export default function Login() {
  return (
    <>
      <ModalText>로그인</ModalText>
      <ModalForm>
        <ModalInput placeholder="이메일" />
        <ModalInput placeholder="비밀번호" />
        <ModalButton>로그인</ModalButton>
      </ModalForm>
      <ModalLink href="#">비밀번호를 잊어버리셨나요?</ModalLink>
      <p>
        계정이 없으신가요?<ModalLink href="#"> 회원가입</ModalLink>
      </p>
    </>
  );
}
