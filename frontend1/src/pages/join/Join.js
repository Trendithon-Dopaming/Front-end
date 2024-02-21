import styled from "styled-components";
import JoinInput from "./JoinInput";
import JoinBtn from "./JoinBtn";
import { useState } from "react";
import { Link } from "react-router-dom";

const JoinBox = styled.div`
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
    color: #fff;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .joinTitle {
    color: #caa5b6;
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

const Join = () => {
  const [email, setEmail] = useState("");
  const [nm, setNm] = useState("");
  const [pw, setPw] = useState("");
  return (
    <JoinBox>
      <link
        href="https://fonts.googleapis.com/css?family=Modak"
        rel="stylesheet"
      ></link>
      <div className="title">
        <div className="webTitle">Dopaming</div>
        <span className="loginTitle">
          <StyledLink to="/login">로그인</StyledLink>
        </span>
        <span className="loginTitle"> | </span>
        <span className="joinTitle">회원가입</span>
      </div>
      <JoinInput
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        nm={nm}
        setNm={setNm}
      />
      <JoinBtn
        email={email}
        setEmail={setEmail}
        nm={nm}
        setNm={setNm}
        pw={pw}
        setPw={setPw}
      />
    </JoinBox>
  );
};

export default Join;
