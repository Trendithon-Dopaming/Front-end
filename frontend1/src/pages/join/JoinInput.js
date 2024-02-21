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
  .nameTitle {
    width: 100px;
    margin-top: 72px;
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
  .nm {
    margin: 72px 100px 0 0;
  }
  .email {
    margin-right: 100px;
  }
  .pw {
    margin-right: 100px;
  }
  .nmGuide {
    color: ${({ nmError }) => (nmError ? "red" : "fff")};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
    text-align: center;
    margin-right: 415px;
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

const JoinInput = ({ email, pw, nm, setEmail, setPw, setNm }) => {
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [nmError, setNmError] = useState(false);

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

  const onChangeNm = (e) => {
    const newNm = e.target.value;
    setNm(newNm);

    if (newNm.length < 2 || newNm.length > 8) {
      setNmError(true);
    } else {
      setNmError(false);
    }
  };

  return (
    <InputBox emailError={emailError} pwError={pwError} nmError={nmError}>
      <div className="inputContainer">
        <span className="nameTitle">이름</span>
        <input type="text" className="nm" onChange={onChangeNm} value={nm} />
      </div>
      <p className="nmGuide">
        {nmError
          ? "*2자 이상 8자 이하 입력이 가능합니다."
          : "*2자 이상 8자 이하 입력이 가능합니다."}
      </p>
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

export default JoinInput;
