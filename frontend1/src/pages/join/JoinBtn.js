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

const JoinBtn = ({ nm, email, pw }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (nm !== "" && email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [nm, email, pw]);

  const onClickBtn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user",
        {
          nickname: nm,
          email: email,
          password: pw,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("정상적으로 회원가입 되었습니다.");
        window.location.href = "http://localhost:3000/login";
      } else {
        alert("회원가입 실패: 서버 오류");
      }
    } catch (error) {
      console.error("회원가입 요청 중 오류:", error);
      alert("회원가입 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <BtnBox>
        <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
          회원가입
        </Btn>
      </BtnBox>
    </div>
  );
};

export default JoinBtn;
