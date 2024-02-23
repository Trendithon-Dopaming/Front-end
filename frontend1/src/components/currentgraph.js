import React, { useState, useEffect } from "react";
//파밍 단계 박스들
function StepBox(props) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "161px",
                    height: "66px",
                    border: "2px solid #D3D3D3",
                    borderRadius: "16.68px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)", //배경투명
                    margin: "10px",
                }}
            >
                <div style={{ margin: "20px" }}>{props.stepname}</div>
            </div>
        </div>
    );
}
function Graph(props) {
    {
        /*파밍단계 정보*/
    }
    const steplists = [];
    for (let i = 0; i < props.stepinfo.length; i++) {
        steplists.push(props.stepinfo[i].content);
    }

    const stepnum = props.stepinfo.length;
    // 그래프를 그릴 버튼의 개수
    const numButtons = stepnum;
    let textboxspacer = 70;
    let textbospacel = 70;

    // stepnum에 따라 textboxspace 값을 계산합니다.
    // stepnum에 따라 textboxspace 값을 계산합니다.
    const calculateTextboxSpace = (stepnum) => {
        let space = 0;
        switch (stepnum) {
            case 2:
                textboxspacer = 70;
                textbospacel = 70;
                break;
            case 4:
                textboxspacer = 30;
                textbospacel = 10;
                break;
            case 3:
                textboxspacer = 43;
                textbospacel = 43;
                break;
            case 5:
                textboxspacer = 0;
                textbospacel = 15;
                break;

            // 추가적인 stepnum에 대한 경우를 필요에 따라 여기에 추가할 수 있습니다.
            default:
                textboxspacer = 70; // 기본값 설정
                textbospacel = 70; // 기본값 설정
                break;
        }
        return space;
    };

    // textboxspace의 초기값을 설정합니다.
    const [textboxSpace, setTextboxSpace] = useState(
        calculateTextboxSpace(stepnum)
    );

    // stepnum이 변경될 때마다 textboxspace 값을 다시 계산하여 업데이트합니다.
    useEffect(() => {
        setTextboxSpace(calculateTextboxSpace(stepnum));
    }, [stepnum]);

    // 옵션을 나타내는 상태 변수 및 상태 변경 함수
    const [option, setOption] = useState(0);
    const [steplist, setSteplist] = useState(props.stepinfo); // useState 훅으로 steplist 상태와 설정 함수 추가

    // 그래프의 너비와 높이
    const graphWidth = 794;
    const graphHeight = 235.89;

    // 각 버튼들의 x, y 좌표를 계산
    const buttons = [];
    for (let i = 0; i < numButtons; i++) {
        const x = (i + 1) * (graphWidth / (numButtons + 1)); // x 좌표 계산을 변경합니다.
        const y = (graphHeight / numButtons) * (numButtons - i); // 감소하도록 설정
        buttons.push({ x, y });
    }

    // 각 버튼의 완료 상태를 저장하는 state 배열
    const [buttonStatus, setButtonStatus] = useState(
        Array(numButtons).fill(false)
    );

    // 팝업 창의 열림/닫힘 상태를 저장하는 state
    const [popupOpen, setPopupOpen] = useState(false);

    // 현재 클릭한 버튼의 인덱스를 저장하는 state
    const [currentButtonIndex, setCurrentButtonIndex] = useState(null);

    // 각 버튼 클릭 시 팝업을 열고 해당 버튼의 인덱스를 저장하는 함수
    const handleButtonClick = (index) => {
        setPopupOpen(true); // 팝업 열기
        setCurrentButtonIndex(index); // 현재 클릭한 버튼의 인덱스 저장
    };

    // 팝업을 닫는 함수
    const closePopup = () => {
        setPopupOpen(false);
    };

    const completeButtonClick = () => {
        // 현재 클릭한 버튼의 옵션 값을 변경합니다.
        const updatedSteplist = [...steplist];
        updatedSteplist[currentButtonIndex].success =
            updatedSteplist[currentButtonIndex].success === true ? false : true;
        setSteplist(updatedSteplist);

        // 팝업을 닫습니다.
        closePopup();
    };

    // x 버튼 클릭 시 팝업을 닫는 함수
    const closeButtonClick = () => {
        // 팝업을 닫습니다.
        closePopup();
    };
    // 버튼 클릭 시 색상 변경 함수
    const toggleButtonColor = (index) => {
        // 현재 버튼의 색상 상태를 변경합니다.
        const updatedButtonStatus = [...buttonStatus];
        updatedButtonStatus[index] = !updatedButtonStatus[index];
        setButtonStatus(updatedButtonStatus);

        // 옵션 값을 변경합니다. (1 -> 0, 0 -> 1)
        setOption(option === true ? false : true);
    };
    // 각 버튼을 담은 JSX 배열 생성
    const buttonElements = buttons.map((button, index) => {
        let outerButtonColor = "";
        let innerButtonColor = "";
        switch (props.option) {
            case "LEISURE": //레저 액티비티
                outerButtonColor = "#CAA5B6"; // 바깥쪽 색상
                innerButtonColor = "#673C4F"; // 안쪽 색상
                break;
            case "TOURISM": //관광
                outerButtonColor = "#BAB8CC"; // 바깥쪽 색상
                innerButtonColor = "#726E97"; // 안쪽 색상
                break;
            case "OTHER": //기타
                outerButtonColor = "#B0C4D4"; // 바깥쪽 색상
                innerButtonColor = "#7698B3"; // 안쪽 색상
                break;
            default:
                outerButtonColor = "#CAA5B6"; // 바깥쪽 색상
                innerButtonColor = "#673C4F"; // 안쪽 색상
                break;
        }

        return (
            <div
                key={index}
                style={{
                    position: "absolute",
                    left: `${button.x - 12}px`, // 원 중앙으로 이동하기 위해 위치 조정
                    top: `${button.y - 12}px`, // 원 중앙으로 이동하기 위해 위치 조정
                    width: "24px", // 원 크기
                    height: "24px", // 원 크기
                    borderRadius: "50%",
                    backgroundColor:
                        steplist[index].success === true
                            ? outerButtonColor
                            : `rgba(255, 255, 255, 0.45)`, // 옵션 값에 따라 색상 변경
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //border: "2px solid pink", // 안쪽 원 테두리
                }}
                //onClick={() => toggleButtonColor(index)} // 각 버튼에 대한 클릭 이벤트 처리 함수
                onClick={() => handleButtonClick(index)} // 각 버튼에 대한 클릭 이벤트 처리 함수
            >
                <div
                    style={{
                        width: "12px", // 안쪽 원 크기
                        height: "12px", // 안쪽 원 크기
                        borderRadius: "50%",
                        backgroundColor:
                            steplist[index].success === true
                                ? innerButtonColor
                                : "#FFFFFF", // 안쪽 원 색상
                    }}
                ></div>
            </div>
        );
    });

    // 텍스트 박스를 담은 JSX 배열 생성
    const textBoxElements = buttons.map((button, index) => {
        // 해당 버튼의 스텝 정보 가져오기
        const stepInfo = index < stepnum ? steplists[index] : "";

        return (
            <div
                key={index}
                style={{
                    border: "1px solid white",
                    borderRadius: "16.68px",
                    // 옵션에 따라 배경 색상 변경
                    //margin: "10px",
                    backgroundColor: "transparent",
                    height: "44px",
                    width: "117px",
                    marginLeft: `${textbospacel}px`,
                    marginRight: `${textboxspacer}px`, // 버튼 중심에서 좌우 조정 이거야ㅑㅇ
                    top: `${graphHeight}px`, // 그래프 아래에 위치
                    //position: "absolute", // 절대 위치 설정
                    marginTop: "60px",
                    color: "white",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        position: "absolute", // 절대 위치 설정
                        marginTop: "50px",
                        margin: "10px",
                        //marginLeft: `${button.x - 60}px`, // 버튼 중심에서 좌측으로 40px만큼 이동
                    }}
                >
                    {stepInfo}
                </div>
            </div>
        );
    });
    // 팝업 컴포넌트
    const popupContent = popupOpen && (
        <div
            style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                backgroundColor: "white",
                width: "740px",
                height: "717px",
                border: "1px solid black",
                padding: "10px",
                transform: "translate(-50%, -50%)", // 가운데 정렬
                backgroundColor: "white",
                border: "1px solid black",
                padding: "10px",
                zIndex: "999", // 팝업이 위에 표시되도록 설정
                borderRadius: "50px",
            }}
        >
            <button
                onClick={closeButtonClick}
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "40px",
                    backgroundColor: "transparent", // 배경색 투명하게
                    border: "none", // 테두리 없애기
                    fontSize: "24px", // 폰트 크기 설정
                }}
            >
                X
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "30px",
                }}
            >
                <div>
                    <div
                        style={{
                            fontSize: "35px",
                            fontWeight: "bold",
                            margin: "10px",
                            textAlign: "center",
                            marginTop: "40px",
                        }}
                    >
                        [{steplists[currentButtonIndex]}] 단계
                    </div>
                </div>
                <div
                    style={{
                        fontSize: "25px",
                        marginTop: "20%",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    해당 단계를 완수 하셨나요? <br></br>
                    <br></br> 경험에 한걸음 더 가까워지셨네요 🔥
                </div>
            </div>
            <div
                style={{
                    margin: "30px",
                    position: "absolute",
                    bottom: "20px",
                    right: "246px",
                }}
            >
                <button
                    onClick={completeButtonClick}
                    style={{
                        right: "350px",
                        width: "206px",
                        height: "62px",
                        borderRadius: "12px",
                        background: "black",
                        color: "white",
                        justifyContent: "center",
                        fontSize: "20px",
                    }}
                >
                    완료하기
                </button>
            </div>
        </div>
    );
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
                                    left: "0px",
                                    top: `${buttons[index].y}px`,
                                    width: " 794px",
                                    height: "1px",
                                    color: "white",
                                    backgroundImage:
                                        "repeating-linear-gradient(90deg, white, white 5px, transparent 5px, transparent 10px)", // 점선 스타일을 설정함
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* 맨 아래에 추가된 y 축 그래프 선 */}
                    <div
                        className="y line"
                        style={{
                            position: "absolute",
                            left: "0px",
                            top: `${graphHeight + 35}px`, // 그래프 영역의 가장 아래에 배치
                            width: "794px",
                            height: "8px", // 굵은 선으로 변경
                            backgroundColor: "white", // 흰색으로 설정
                        }}
                    ></div>
                </div>
            </div>

            <div></div>
            {/* 팝업 */}
            <div className="popup">{popupContent}</div>
            {/* 텍스트 박스 */}
            <div
                className="textbox"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "794px",
                    marginTop: "20px",
                    justifyContent: "center",
                }}
            >
                {textBoxElements}
            </div>
        </main>
    );
}

export default Graph;
