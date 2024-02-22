import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "../../assets/editIcon.svg";

const MypageSection = styled.section`
  margin: 0 auto 0;
  min-height: 1080px;
  background-color: black;
  color: #fff;
  .acntBody {
    font-family: Pretendard;
    overflow: hidden;
    padding: 108px 200px 234px 200px;
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
    .icon {
      margin-left: 10px;
    }
  }
  .infoField {
    width: 1110px;
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
    padding-left: 16px;
    display: flex;
    align-items: center;
  }
  .saveBtn {
    width: 1126px;
    height: 58px;
    flex-shrink: 0;
    background: #4e4e4e;
    color: #2b2a2a;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Mypage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Token ${token}`,
    };

    axios
      .get("http://127.0.0.1:8000/user/profile/", {
        withCredentials: true,
        headers: headers,
      })
      .then((response) => {
        const { profile, scores } = response.data;
        setUserData({ profile, scores });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <MypageSection>
      <div className="acntBody">
        {loading ? (
          <p>데이터를 불러오는 중입니다...</p>
        ) : (
          <div>
            <div className="title">나의 정보</div>
            <div className="subtitle">이름</div>
            <div className="infoField">db에서 불러오기</div>
            <div className="subtitle">이메일</div>
            <div className="infoField">db에서 불러오기</div>
            <div className="subtitle">
              비밀번호 &nbsp;
              <img src={EditIcon} alt="edit icon" />
            </div>

            <div className="infoField">db에서 불러오기</div>
            <div className="saveBtn">저장하기</div>
          </div>
        )}
      </div>
    </MypageSection>
  );
};

export default Mypage;
