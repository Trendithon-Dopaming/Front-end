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
    margin: 72px 100px 60px 0;
  }
  .pw {
    margin-right: 100px;
  }
  .error {
    font-size: 12px;
  }
  .pwGuide {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 310px;
    text-align: center;
    margin-right: 400px;
  }
`;

const LoginInput = ({ email, pw, setEmail, setPw }) => {
  const [emailError, setEmailError] = useState("");
  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (newEmail === "") {
      setEmailError("");
    } else if (!emailRegex.test(newEmail)) {
      setEmailError("⚠️ 올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  return (
    <InputBox>
      <div className="inputContainer">
        <span className="emailTitle">이메일</span>
        <input
          type="text"
          className={`email ${emailError ? "error" : ""}`}
          onChange={onChangeEmail}
          value={email}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="inputContainer">
        <span className="pwTitle">비밀번호</span>
        <input
          type="password"
          className="pw"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          value={pw}
        />
      </div>
      <p className="pwGuide">*최소 4자 이상 비밀번호를 입력해주세요.</p>
    </InputBox>
  );
};

export default LoginInput;
