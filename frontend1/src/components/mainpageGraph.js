import React, { useState } from "react";

function MGraph(props) {
  const numButtons = 5; // stepnum을 5로 고정

  // 그래프의 너비와 높이
  const graphWidth = 794;
  const graphHeight = 235.89;

  // 각 버튼들의 x, y 좌표를 계산
  const buttons = [];
  for (let i = 0; i < numButtons; i++) {
    const x = (i + 1) * (graphWidth / (numButtons + 1));
    const y = (graphHeight / numButtons) * (numButtons - i);
    buttons.push({ x, y });
  }
  // 텍스트 박스를 담은 JSX 배열 생성
  const textBoxElements = () => {
    const stepNames = [
      "50,000원 모으기",
      "70,000원 모으기",
      "최저가 찾기",
      "예약하기",
      "경험하기",
    ];
    return stepNames.map((stepName, index) => (
      <div
        key={index}
        style={{
          border: "1px solid white",
          borderRadius: "16.68px",
          margin: "10px",
          backgroundColor: "transparent",
          height: "44px",
          width: "117px",
          marginTop: "50px",
          color: "white",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute", // 절대 위치 설정
          left: `${buttons[index].x - 100}px`, // 버튼 중심에서 좌측으로 40px만큼 이동
        }}
      >
        {stepName}
      </div>
    ));
  };

  // 각 버튼을 담은 JSX 배열 생성
  const buttonElements = buttons.map((button, index) => (
    <div
      key={index}
      style={{
        position: "absolute",
        left: `${button.x - 12}px`,
        top: `${button.y - 12}px`,
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "#fff",
      }}
    ></div>
  ));

  return (
    <main>
      <div>
        <div
          style={{
            position: "relative",
            width: `${graphWidth}px`,
            height: `${graphHeight}px`,
          }}
        >
          <div className="btnelements">{buttonElements}</div>
          <div className="y line">
            {/* y 축 그래프 선 */}
            {[...Array(numButtons)].map((_, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: "40px",
                  top: `${buttons[index].y}px`,
                  width: " 740px",
                  height: "1px",
                  color: "white",
                  backgroundImage:
                    "repeating-linear-gradient(90deg, white, white 5px, transparent 5px, transparent 10px)",
                }}
              ></div>
            ))}
          </div>

          {/* 맨 아래에 추가된 y 축 그래프 선 */}
          <div
            className="y line"
            style={{
              position: "absolute",
              left: "40px",
              top: `${graphHeight + 35}px`,
              width: "740px",
              height: "8px",
              backgroundColor: "white",
            }}
          >
            <div>{textBoxElements()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MGraph;
