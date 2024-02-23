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
  background-color: ${(props) => (props.disable ? "#000" : "#fff")};
  border: ${(props) => (props.disable ? "1px solid #fff" : "none")};
  color: ${(props) => (props.disable ? "#fff" : "#000")};
  text-align: center;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  width: 260px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 32.432px;
  background: #fff;
  padding: 25px 95px 20px 95px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;

  button {
    position: absolute;
    bottom: 15px;
    left: 80%;
    transform: translateX(-50%);
    width: 111.568px;
    height: 40.216px;
    border-radius: 7.135px;
    background: #0a0101;
    color: #fff;
    font-family: Pretendard;
    font-size: 16.216px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const JoinBtn = ({ nm, email, pw }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    if (nm !== "" && email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [nm, email, pw]);

  const handleJoin = async () => {
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

      if (response.data === "success") {
        setIsModalOpen(true);
        setModalContent("정상적으로 회원가입 되었습니다.");
      } else if (response.data === "duplicate") {
        setIsModalOpen(true);
        setModalContent("이미 존재하는 이메일입니다.");
      }
    } catch (error) {
      setIsModalOpen(true);
      setModalContent("회원가입 요청 중 오류가 발생했습니다.");
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setModalContent("");

    if (modalContent === "정상적으로 회원가입 되었습니다.") {
      window.location.href = "http://localhost:3000/login";
    }
  };

  return (
    <div>
      <BtnBox>
        <Btn onClick={handleJoin} disabled={isDisabled} disable={isDisabled}>
          회원가입하기
        </Btn>
      </BtnBox>
      {isModalOpen && (
        <ModalWrapper>
          <ModalContent>
            <p>{modalContent}</p>
            <button onClick={handleConfirm} className="modalBtn">
              확인
            </button>
          </ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
};

export default JoinBtn;
