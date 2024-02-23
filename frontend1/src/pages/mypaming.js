import Recommnedbox from "../components/listbox";

import Graph from "../components/currentgraph";
import eximg1 from "../assets/ad_Ex2.jpg";
import ListBox from "../components/listbox";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import makenewimg from "../assets/square-and-pencil.png";
import iconmove2 from "../assets/chevron-right (2).png";
import Header from "../components/header";
import Footer from "../components/footer";
function CurrentBox(props) {
    // 옵션에 따라 배경 색상 설정
    // 옵션에 따라 배경 색상 설정
    let backgroundColorc;
    let backgroundColornotc;
    switch (props.type) {
        case "LEISURE":
            backgroundColorc = "#673C4F";
            backgroundColornotc = "#CAA5B6";
            break;
        case "TOURISM":
            backgroundColorc = "#726E97";
            backgroundColornotc = "#BAB8CC";
            break;
        case "OTHER":
            backgroundColorc = "#7698B3";
            backgroundColornotc = "#B0C4D4";
            break;
        default:
            backgroundColorc = "#673C4F";
            backgroundColornotc = "#CAA5B6";
            break;
    }

    let backgroundColor;
    if (props.option === "1") {
        backgroundColor = backgroundColorc;
    } else {
        backgroundColor = backgroundColornotc;
    }

    return (
        <div>
            <div
                style={{
                    width: "299px",
                    height: "54px",
                    border: "2px solid black",
                    borderRadius: "16.68px",
                    backgroundColor: backgroundColor, // 옵션에 따라 배경 색상 변경
                    margin: "10px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    fontSize: "20px",
                }}
            >
                <div style={{ margin: "20px", color: "white" }}>
                    {props.stepname}
                </div>
            </div>
        </div>
    );
}

function Current(props) {
    {
        /* 파밍 현황 정보*/
    }
    const currentlists = [];
    for (let j = 0; j < props.currentinfo.length; j++) {
        console.log(props.currentinfo[j].info);
        currentlists.push(props.currentinfo[j].info);
    }
    const finshednum = 0;
    if (props.option === 1) {
        finshednum += 1;
    }
    return (
        <div className="stepsCurrent" style={{ margin: "60px" }}>
            <div style={{ fontSize: "30px" }}>파밍 현황 </div>
            <div>
                {/*option은 1이면 완료=진한 핑크, 0이면 미완료=연한핑크 */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <CurrentBox
                        stepname={props.name}
                        option="1"
                        type={props.type}
                    ></CurrentBox>
                    <CurrentBox
                        stepname={`남은 기간 ${props.dday} 일`}
                        option="0"
                        type={props.type}
                    ></CurrentBox>
                    <CurrentBox
                        stepname={`완수한 파밍  ${props.cleared_step}개`}
                        option="0"
                        type={props.type}
                    ></CurrentBox>
                    <CurrentBox
                        stepname={`남은 파밍 ${
                            props.currentinfo.length - finshednum
                        } 개`}
                        option="0"
                        type={props.type}
                    ></CurrentBox>
                    <Link to="/mainpage" style={{ textDecoration: "none" }}>
                        <button
                            style={{
                                cursor: "pointer",
                                border: "1px solid white",
                                background: "none",
                                fontSize: "white",
                                color: "white",
                                width: "100px",
                                height: "58px",
                                fontSize: "23.63px",
                                borderRadius: "16.68px",
                                marginTop: "10px",
                            }}
                        >
                            수정
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
function Recommend() {
    const recommendlist = [
        { name: "패러글라이딩", date: "2023.01.02~2023.12.24" },
        { name: "번지점프", date: "2023.01.02~2023.12.24" },
        { name: "스노클링", date: "2023.01.02~2023.12.24" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px",
                margin: "10px",
            }}
        >
            <Recommnedbox
                name={recommendlist[0].name}
                date={recommendlist[0].date}
            ></Recommnedbox>
            <Recommnedbox
                name={recommendlist[1].name}
                date={recommendlist[1].date}
            ></Recommnedbox>
            <Recommnedbox
                name={recommendlist[2].name}
                date={recommendlist[2].date}
            ></Recommnedbox>
        </div>
    );
}

function Paminglog(props) {
    const info = [{}];
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
                <div
                    style={{
                        marginRight: "30px",
                    }}
                >
                    <ListBox
                        name={props.name}
                        date={props.date}
                        style={{
                            width: "314px",
                            height: "312px",
                            borderRadius: "44px",
                        }}
                    ></ListBox>
                </div>

                <Graph stepinfo={props.stepinfo} option={props.type}></Graph>
            </div>
        </div>
    );
}

function ShowCurrent() {
    const [ongoingPamings, setOngoingPamings] = useState([]);

    useEffect(() => {
        const fetchOngoingPamings = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/pamings/ongoing"
                );
                setOngoingPamings(response.data.pamings);
            } catch (error) {
                console.error("Error fetching ongoing pamings:", error);
            }
        };

        fetchOngoingPamings();
    }, []);
    const paminginfoget = [
        {
            paming_id: 1,
            paming_title: "열기구 체험",
            category: "LEISURE",
            photo_url: "photo.com",
            start_date: "2024.02.23",
            end_date: "2024.02.27",
            remaining_period: 4,
            cleared_step: 1,
            unclear_step: 2,
            steps: [
                { step: 1, content: "100,000원 모으기", success: true },
                { step: 2, content: "예약하기", success: false },
                { step: 3, content: "경험하기", success: false },
            ],
        },
        {
            paming_id: 2,
            paming_title: "도쿄타워",
            category: "TOURISM",
            photo_url: "photo.com",
            start_date: "2024.02.23",
            end_date: "2024.02.27",
            remaining_period: 4,
            cleared_step: 3,
            unclear_step: 1,
            steps: [
                { step: 1, content: "200,000원 모으기", success: true },
                { step: 2, content: "예약하기", success: true },
                { step: 3, content: "일본가기", success: true },
                { step: 4, content: "경험하기", success: false },
            ],
        },
    ];

    return (
        <div>
            {paminginfoget.map((paming, index) => (
                <div key={index}>
                    <Current
                        currentinfo={paming.steps}
                        name={paming.paming_title}
                        type={paming.category}
                        dday={paming.remaining_period}
                        cleared_step={paming.cleared_step}
                        unclear_step={paming.unclear_step}
                    />
                    <Paminglog
                        stepinfo={paming.steps}
                        currentinfo={paming.steps}
                        name={paming.paming_title}
                        type={paming.category}
                        date={paming.start_date + " ~ " + paming.end_date}
                    />
                </div>
            ))}
        </div>
    );
}

function Mypaming() {
    return (
        <div
            style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <Header></Header>
            <div
                className="main"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "10px",
                }}
            >
                <div style={{ margin: "50px" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "55px",
                                color: "white",
                                border: "bold",
                                margin: "50px",
                            }}
                        >
                            나의 파밍
                        </div>
                        <Link to="/mainpage" style={{ textDecoration: "none" }}>
                            <button
                                style={{
                                    cursor: "pointer",
                                    border: "1px solid white",
                                    background: "none",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    fontSize: "white",
                                    color: "white",
                                    width: "269px",
                                    height: "62px",
                                    fontSize: "23.63px",
                                    borderRadius: "20px",
                                    marginLeft: "50px",
                                    textAlign: "center",
                                    marginTop: "60px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: "10px",
                                    }}
                                >
                                    <div>
                                        <img src={makenewimg}></img>
                                    </div>

                                    <div>새 파밍로그 만들기</div>
                                </div>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <div
                            style={{
                                fontSize: "55px",
                                color: "white",
                                border: "bold",
                                marginTop: "60px",
                                margin: "50px",
                            }}
                        >
                            진행 중인 파밍로그
                        </div>

                        <ShowCurrent></ShowCurrent>
                    </div>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                margin: "20px",
                                marginTop: "100px",
                            }}
                        >
                            <div style={{ margin: "50px" }}>
                                <div
                                    style={{
                                        fontSize: "55px",
                                        color: "white",
                                        border: "bold",
                                        marginBottom: "50px",
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <div>저장 팜</div>
                                    <div
                                        style={{
                                            marginTop: "9px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        <img src={iconmove2}></img>
                                    </div>
                                </div>

                                <div>
                                    <Recommend></Recommend>
                                </div>
                            </div>
                            <div style={{ margin: "50px" }}>
                                <div
                                    style={{
                                        fontSize: "55px",
                                        color: "white",
                                        border: "bold",
                                        marginBottom: "50px",
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <div>지난 파밍로그</div>
                                    <div
                                        style={{
                                            marginTop: "9px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        <img src={iconmove2}></img>
                                    </div>
                                </div>
                                <div>
                                    <Recommend></Recommend>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Mypaming;
