import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "../../assets/editIcon.svg";
//import PasswordModal from "./pwChangeModal";
import { useAuth } from "../../components/AuthContext";

const MypageSection = styled.section`
  margin: 0 auto 0;
  min-height: 1080px;
  background-color: black;
  color: #fff;
  .acntBody {
    font-family: Pretendard;
    overflow: hidden;
    padding: 108px 200px 234px 180px;
  }
  .title {
    color: #fffbfb;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 63px;
  }
  .subtitle {
    color: #fffbfb;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 30px;
    img {
      cursor: pointer;
    }
  }
  .infoField {
    width: 100%;
    height: 62px;
    flex-shrink: 0;
    border: 1px solid #9b9b9b;
    background: rgba(255, 255, 255, 0);
    color: #9b9b9b;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 30px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  input {
    border: none;
    color: #9b9b9b;
  }
  .saveBtn {
    width: 100%;
    height: 58px;
    flex-shrink: 0;
    background: ${(props) => (props.modified ? "#fff" : "#4e4e4e")};
    color: ${(props) => (props.modified ? "#000" : "#2b2a2a")};
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 96px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${(props) => (props.modified ? "pointer" : "default")};
  }
`;

const Mypage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [isNameModified, setIsNameModified] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/info", {
        withCredentials: true,
      })
      .then((response) => {
        setUserData(response.data);
        setNameInput(response.data.name);
        setOriginalName(response.data.name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("유저 정보를 가져오는 중 에러 발생:", error);
        setLoading(false);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
    setIsNameModified(e.target.value !== originalName);
  };

  const handleSave = () => {
    axios
      .patch(
        "http://localhost:8080/user/edit/info",
        { name: nameInput },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data === "success") {
          setUserData((prevUserData) => ({
            ...prevUserData,
            name: nameInput,
          }));
          setOriginalName(nameInput);
          setIsModalOpen(false);
          setIsNameModified(false);
        } else {
          console.error("이름 변경에 실패하였습니다.");
        }
      })
      .catch((error) => {
        console.error("이름 변경 요청 중 에러 발생:", error);
      });
  };

  return (
    <MypageSection modified={isNameModified}>
      <div className="acntBody">
        {loading ? (
          <p>데이터를 불러오는 중입니다.</p>
        ) : isLoggedIn && userData ? (
          <div>
            <div className="title">나의 정보</div>
            <div className="subtitle">이름</div>
            <input
              type="text"
              className="infoField"
              value={nameInput}
              onChange={handleNameChange}
            />
            <div className="subtitle">이메일</div>
            <div className="infoField">{userData.email}</div>
            <div className="subtitle">
              비밀번호 &nbsp;
              {/*<img src={EditIcon} alt="edit icon" onClick={openModal} />*/}
            </div>
            <div className="infoField">****</div>
            <div
              className="saveBtn"
              onClick={isNameModified ? handleSave : undefined}
            >
              저장하기
            </div>
          </div>
        ) : (
          <div className="subtitle">로그인이 필요합니다.</div>
        )}
        {isModalOpen && <PasswordModal closeModal={closeModal} />}
      </div>
    </MypageSection>
  );
};

export default Mypage;
