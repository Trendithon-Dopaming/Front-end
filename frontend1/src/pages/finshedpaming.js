import Recommnedbox from "../components/listbox";
import Finshedbox from "../components/finshedbox";
import Graph from "../components/currentgraph";
import eximg1 from "../assets/ad_Ex2.jpg";
import ListBox from "../components/listbox";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// 카테고리 선택 박스
const SelectBox = (props) => {
    return (
        <select
            style={{
                width: "200px", // 너비 조정
                height: "40px", // 높이 조정
                fontSize: "16px", // 폰트 크기 조정
                // 기타 스타일을 필요에 따라 추가하세요
                backgroundColor: "black", // 배경 색상 설정
                color: "white", // 폰트 색상 설정
                border: "1px solid white", // 테두리 설정
                // 기타 스타일을 필요에 따라 추가하세요
            }}
        >
            <option value="" disabled selected hidden>
                {props.category}
            </option>
            {props.option.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

function Current(props) {
    const [popupOpen, setPopupOpen] = useState(false); // 팝업 창 열림/닫힘 상태

    const togglePopup = () => {
        setPopupOpen(!popupOpen); // 팝업 창 상태 변경
    };

    // 파밍 현황 정보를 배열에 저장
    const currentlists = props.currentinfo.map((item) => item.info);

    // 완료된 파밍의 개수 계산
    let finishedNum = 0;
    props.currentinfo.forEach((item) => {
        if (item.option === "1") {
            finishedNum += 1;
        }
    });
    // 완료 버튼 클릭 시 새 창으로 이동하는 함수
    const completeButtonClick = () => {
        // 새 창으로 이동
        window.open("https://example.com", "_blank");
    };
    // 팝업을 닫는 함수
    const closeButtonClick = () => {
        setPopupOpen(false); // 팝업 닫기
    };

    return (
        <div className="stepsCurrent" style={{ margin: "60px" }}>
            <div
                style={{
                    display: "flex",

                    flexDirection: "row",
                }}
            >
                {/* 파밍 현황 표시 */}
                <Finshedbox stepname={props.name}></Finshedbox>

                <Finshedbox
                    stepname={`완수한 파밍 ${finishedNum}개`}
                ></Finshedbox>
                <Finshedbox
                    stepname={`남은 파밍 ${
                        props.currentinfo.length - finishedNum
                    } 개`}
                ></Finshedbox>

                {/* 완료 여부에 따라 버튼 표시 */}
                {finishedNum === props.currentinfo.length ? (
                    <>
                        {/* 수정된 부분: 재도전하기 버튼 */}
                        <button style={buttonStyle}>파밍 성공</button>
                    </>
                ) : (
                    <>
                        {/* 수정된 부분: 재도전하기 버튼 */}
                        <button style={buttonStyle}>파밍 실패</button>
                        <button style={buttonStyle} onClick={togglePopup}>
                            재도전하기
                        </button>
                    </>
                )}
                {/* 수정된 부분: 팝업 컴포넌트 */}

                {popupOpen && (
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
                            <div
                                style={{
                                    fontSize: "35px",
                                    fontWeight: "bold",
                                    margin: "10px",
                                }}
                            >
                                재도전하기
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: "25px",
                                marginTop: "20%",
                                justifyContent: "center",
                                textAlign: "center", // 텍스트 중앙 정렬
                            }}
                        >
                            재도전하시겠습니까?
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
                                    width: "206px",
                                    height: "62px",
                                    borderRadius: "12px",
                                    background: "black",
                                    color: "white",
                                    justifyContent: "center",
                                    fontSize: "20px",
                                }}
                            >
                                재도전하기
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// 버튼 스타일
const buttonStyle = {
    cursor: "pointer",
    border: "1px solid white",
    background: "none",
    fontSize: "white",
    color: "white",
    width: "150px",
    height: "58px",
    fontSize: "19px",
    borderRadius: "16.68px",
    marginTop: "10px",
    marginRight: "20px",
};
function Paminglog(props) {
    return (
        <div
            className="main"
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "10px",
                }}
            >
                <ListBox
                    name="패러글라이딩"
                    date="2023.01.02~2023.12.24"
                    style={{
                        width: "314px",
                        height: "312px",
                        borderRadius: "44px",
                    }}
                ></ListBox>
                <Graph stepinfo={props.stepinfo} option="1"></Graph>
            </div>
        </div>
    );
}

function Finshed() {
    // 분야 카테고리
    const optionField = [
        { value: 1.1, name: "래저, 액티비티" },
        { value: 1.2, name: "관광" },
        { value: 1.3, name: "기타" },
    ];
    // 지역 카테고리
    const optionCountry = [
        { value: 2.1, name: "국내" },
        { value: 2.2, name: "해외" },
    ];
    const steplist = [
        { info: "50,000원 모으기", option: "1" },
        { info: "30,000원 모으기", option: "1" },
        { info: "60,000원 모으기", option: "1" },
        { info: "70,000원 모으기", option: "0" },
    ];
    //파밍 정보
    const listpaming = [
        { currentinfo: steplist, name: "패러글라이딩" },
        { currentinfo: steplist, name: "패러글라이딩" },
    ];

    return (
        <div
            style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                className="main"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Link
                        to="/mainpage"
                        style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            background: "none",
                            fontSize: "55px",

                            color: "white",

                            fontSize: "70px",
                        }}
                    >
                        지난 파밍로그
                    </Link>
                </div>

                <div>
                    <div
                        className="optionboxs"
                        style={{ display: "flex", margin: "30px" }}
                    >
                        <div style={{ display: "flex", margin: "10px" }}>
                            <div style={{ margin: "10px" }}>
                                <SelectBox
                                    option={optionField}
                                    category="분야"
                                ></SelectBox>
                            </div>
                            <div style={{ margin: "10px" }}>
                                <SelectBox
                                    option={optionCountry}
                                    category="지역"
                                ></SelectBox>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Current
                            currentinfo={listpaming[0].currentinfo}
                            name={listpaming[0].name}
                        ></Current>
                    </div>
                    <div>
                        <Paminglog
                            stepinfo={listpaming[0].currentinfo}
                        ></Paminglog>
                    </div>
                    <div>
                        <Current
                            currentinfo={listpaming[0].currentinfo}
                            name={listpaming[1].name}
                        ></Current>
                    </div>
                    <div>
                        <Paminglog
                            stepinfo={listpaming[0].currentinfo}
                        ></Paminglog>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            margin: "20px",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Finshed;
