import logo from "../assets/image/icon_logo.png";
import kakao from "../assets/image/icon_kakao.png";
import line from "../assets/image/icon_line.png";
import twitter from "../assets/image/icon_twitter.png";
import google from "../assets/image/icon_google.png";
import styled from "styled-components";

const Modal = ({ login, isLogin }) => {
  const handleClosed = () => {
    login();
  };
  return (
    <BackgroundModel login={isLogin}>
      <Model>
        <CloseButton onClick={handleClosed}>X</CloseButton>
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
              <img src={kakao} alt="카카오톡"></img>
            </LoginImgButton>
          </LoginImgLi>
          <LoginImgLi>
            <LoginImgButton>
              <img src={line} alt="라인"></img>
            </LoginImgButton>
          </LoginImgLi>
          <LoginImgLi>
            <LoginImgButton>
              <img src={twitter} alt="트위터"></img>
            </LoginImgButton>
          </LoginImgLi>
          <LoginImgLi>
            <LoginImgButton>
              <img src={google} alt="구글"></img>
            </LoginImgButton>
          </LoginImgLi>
        </LoginImgUl>
        <LoginTip>
          TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </LoginTip>
      </Model>
    </BackgroundModel>
  );
};

export default Modal;

const BackgroundModel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 98;
  background-color: ${({ login }) => (login ? "rgba(0, 0, 0, 0.56)" : "")};
`;

const Model = styled.div`
  width: 375px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 100px auto;
  overflow: hidden;
  z-index: 100;
  padding: 10px 10px;
  background-color: white;
`;

const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 198px;
  height: auto;
  margin-bottom: 20px;
`;

const LoginText = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`;

const LoginLink = styled.a`
  font-size: 18px;
  color: rgb(255, 47, 110);
  text-decoration: none;
  margin-bottom: 16px;
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

const CloseButton = styled.button`
  background-color: transparent;
  color: gray;
  width: 30px;
  height: 30px;
  border: none;
  align-self: end;
  margin: 0 20px 20px 0;
`;
