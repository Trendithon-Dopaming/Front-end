import styled from "styled-components";
import { useState } from "react";

const InputBox = styled.div`
  font-family: Pretendard;
  margin-top: 36px;
  display: block;
  width: 100%;
  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .emailTitle {
    width: 100px;
    margin-top: 72px;
  }
  .pwTitle {
    width: 100px;
  }
  input {
    width: 600px;
    height: 44px;
    flex-shrink: 0;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #fff;
    &:focus {
      outline: none;
    }
  }
  .email {
    margin: 72px 100px 0 0;
  }
  .pw {
    margin-right: 100px;
  }
  .emailGuide {
    color: ${({ emailError }) => (emailError ? "#fff" : "#000")};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
    text-align: center;
    margin-right: 480px;
  }
  .pwGuide {
    color: ${({ pwError }) => (pwError ? "red" : "fff")};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 310px;
    text-align: center;
    margin-right: 460px;
  }
`;

const LoginInput = ({ email, pw, setEmail, setPw }) => {
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (newEmail === "") {
      setEmailError(false);
    } else if (!emailRegex.test(newEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const onChangePassword = (e) => {
    const newPassword = e.target.value;
    setPw(newPassword);

    if (newPassword.length < 4) {
      setPwError(true);
    } else {
      setPwError(false);
    }
  };

  return (
    <InputBox emailError={emailError} pwError={pwError}>
      <div className="inputContainer">
        <span className="emailTitle">이메일</span>
        <input
          type="text"
          className="email"
          onChange={onChangeEmail}
          value={email}
        />
      </div>
      <p className="emailGuide">
        {emailError ? "*유효한 형식이 아닙니다." : "*유효한 형식이 아닙니다."}
      </p>
      <div className="inputContainer">
        <span className="pwTitle">비밀번호</span>
        <input
          type="password"
          className="pw"
          onChange={onChangePassword}
          value={pw}
        />
      </div>
      <p className="pwGuide">
        {pwError
          ? "*최소 4자 이상 입력해주세요."
          : "*최소 4자 이상 입력해주세요."}
      </p>
    </InputBox>
  );
};

export default LoginInput;
