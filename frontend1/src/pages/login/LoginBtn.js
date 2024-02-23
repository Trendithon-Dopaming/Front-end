import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../components/AuthContext";

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

const LoginBtn = ({ email, pw, setEmail, setPw }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);

  const handleLogin = async () => {
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
        login();
        setIsModalOpen(true);
        setModalContent("성공적으로 로그인되었습니다.");
      } else {
        setIsModalOpen(true);
        setModalContent("아이디 또는 비밀번호가 일치하지 않습니다.");
        localStorage.clear();
      }
    } catch (error) {
      setIsModalOpen(true);
      setModalContent("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setModalContent("");
    setEmail("");
    setPw("");

    if (modalContent === "성공적으로 로그인되었습니다.") {
      window.location.href = "http://localhost:3000/";
    }
  };

  return (
    <div>
      <BtnBox>
        <Btn onClick={handleLogin} disabled={isDisabled} disable={isDisabled}>
          로그인하기
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

export default LoginBtn;
