import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Btn = styled.button`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 600px;
  height: 60px;
  flex-shrink: 0;
  padding: 15px 0;
  border-radius: 71px;
  background: #fff;
  border: none;
  text-align: center;
  color: #000;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBtn = ({ email, pw, setEmail, setPw }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);

  const onClickBtn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email: email,
          password: pw,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data === "success") {
        alert("로그인 성공");
        setEmail("");
        setPw("");
        window.location.href = "http://localhost:3000/";
      } else {
        localStorage.clear();
        alert("로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 요청 중 오류:", error);
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <BtnBox>
        <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
          로그인
        </Btn>
      </BtnBox>
    </div>
  );
};

export default LoginBtn;
