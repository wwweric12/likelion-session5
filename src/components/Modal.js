import logo from "../assets/image/icon_logo.png";
import kakao from "../assets/image/icon_kakao.png";
import line from "../assets/image/icon_line.png";
import twitter from "../assets/image/icon_twitter.png";
import google from "../assets/image/icon_google.png";
import styled from "styled-components";

const Modal = () => {
  return (
    <Model>
      <LogoImg></LogoImg>
      <LoginText>로그인</LoginText>
      <LoginForm>
        <LoginInput placeholder="이메일"></LoginInput>
        <LoginInput placeholder="비밀번호"></LoginInput>
        <LoginButton>로그인</LoginButton>
      </LoginForm>
      <LoginLink href="#">비밀번호를 잊어버리셨나요?</LoginLink>
      <p>
        계정이 없으신가요?<LoginLink href="#"> 회원가입</LoginLink>
      </p>
      <LineContainer>
        <Line></Line>
        <div>OR</div>
        <Line></Line>
      </LineContainer>

      <LoginImgUl>
        <LoginImgLi>
          <LoginImgButton>
            <img src={kakao}></img>
          </LoginImgButton>
        </LoginImgLi>
        <LoginImgLi>
          <LoginImgButton>
            <img src={line}></img>
          </LoginImgButton>
        </LoginImgLi>
        <LoginImgLi>
          <LoginImgButton>
            <img src={twitter}></img>
          </LoginImgButton>
        </LoginImgLi>
        <LoginImgLi>
          <LoginImgButton>
            <img src={google}></img>
          </LoginImgButton>
        </LoginImgLi>
      </LoginImgUl>
      <LoginTip>
        TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
      </LoginTip>
    </Model>
  );
};

export default Modal;

const Model = styled.div`
  width: 375px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: auto;
  overflow: hidden;
  border: 1px solid black;
  padding: 30px 10px;
  background-color: white;
`;

const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 198px;
  height: auto;
`;

const LoginText = styled.h2`
  font-size: 18px;
`;

const LoginForm = styled.form`
  width: 335px;
`;
const LoginInput = styled.input`
  display: flex;
  width: 100%;
  height: 44px;
  background: rgb(245, 245, 245);
  border: none;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  text-align: center;
  background: rgb(255, 47, 110);
  margin-bottom: 12px;
`;

const LoginLink = styled.a`
  font-size: 18px;
  color: rgb(255, 47, 110);
  text-decoration: none;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
`;

const LineContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

const LoginImgUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginImgLi = styled.li`
  list-style: none;
`;

const LoginImgButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const LoginTip = styled.div`
  text-align: center;
  background-color: rgb(247, 247, 247);
  color: rgb(140, 140, 140);
  padding: 20px;
`;
