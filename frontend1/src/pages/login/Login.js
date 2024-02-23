import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginBtn from "./LoginBtn";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginBox = styled.div`
  font-family: Pretendard;
  .title {
    text-align: center;
  }
  .webTitle {
    color: #fff;
    font-family: Modak;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 20px 0;
    margin-bottom: 16px;
  }
  .loginTitle {
    color: #caa5b6;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .joinTitle {
    color: #fff;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <LoginBox>
      <link
        href="https://fonts.googleapis.com/css?family=Modak"
        rel="stylesheet"
      ></link>
      <div className="title">
        <div className="webTitle">Dopaming</div>
        <span className="loginTitle">로그인</span>
        <span className="joinTitle"> | </span>
        <span className="joinTitle">
          <StyledLink to="/join">회원가입</StyledLink>
        </span>
      </div>
      <LoginInput email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
      <LoginBtn email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
    </LoginBox>
  );
};

export default Login;
