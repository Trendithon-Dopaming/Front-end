import styled from "styled-components";
import { useEffect, useState } from "react";

const MainSection = styled.div`
  .mainPart {
    text-align: center;
    background-color: black;
    color: #fff;
    font-family: Pretendard;
    .part1 {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 422.13px;
      .hook1 {
        text-align: center;
        font-size: 71.094px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .hook2 {
        text-align: center;
        font-size: 42.656px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 86.497px;
      }
      .hook3 {
        font-size: 24.883px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 21px 29.622px;
        flex-wrap: wrap;
        .worry {
          border-radius: 52.444px;
          border: 1.185px solid #fff;
          background: #000;
          display: flex;
          width: 569.935px;
          padding: 28.438px 60.43px;
          justify-content: center;
          align-items: center;
          gap: 11.849px;
        }
      }
    }
    .title1 {
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .title2 {
      font-size: 50px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .actiImg {
      margin: 86px 0 86px 0;
    }
    .dirBtn {
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: inline-flex;
      padding: 26px 105px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 16px;
      border: 1px solid #fff;
      background: #000;
      margin-bottom: 240px;
    }
  }
`;

const Mainpage = () => {
  return (
    <MainSection>
      <div className="mainPart">
        <div className="part1">
          <div className="hook1">🔥잠깐!</div>
          <br />
          <div className="hook2">혹시 나도 도파민 중독 아닐까?</div>
          <div className="hook3">
            <div className="worry">
              😔 습관적으로 인스타그램을 들어가게 돼요
            </div>
            <div className="worry">😅 밥 먹을 때 넷플릭스는 필수예요</div>
            <div className="worry">☹️ 일상이 재미없고 따분해요</div>
            <div className="worry">🤯 시간이 유독 빠르게 가는 것 같아요</div>
          </div>
        </div>
        <div className="part2">
          <div className="title1">
            건강한 도파민은 남다른 경험을 쌓아갈 때 분출됩니다.
          </div>
          <br />
          <div className="title2">
            도파밍에서 다른 사람들의 남다른 경험을 구경할 수 있어요.
          </div>
          <div className="actiImg">이미지 추가 예정</div>

          <div className="dirBtn">경험 파밍 바로가기</div>
        </div>
        <div className="part3">
          <div className="title1">
            또한, 불확실해보였던 것들이 확실해질 때 건강한 도파민은 분비됩니다.
          </div>
          <br />
          <div className="title2">
            도파밍에서는 시작부터 끝까지 경험이 이루어지는 과정을
            <br /> 직접 설계하고 볼 수 있습니다.
          </div>
          <div className="farmImg">파밍 그래프 첨부 예정</div>
          <div className="dirBtn">나의 팜 바로가기</div>
        </div>
      </div>
    </MainSection>
  );
};

export default Mainpage;
