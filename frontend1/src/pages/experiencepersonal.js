import Recommnedbox from "../components/listbox";
import CurrentBox from "../components/currentbox";
import Graph from "../components/currentgraph";
import eximg1 from "../assets/ad_Ex2.jpg";
import iconmove2 from "../assets/chevron-right (2).png";
//유사 파밍 박스 -> 파밍 목록에서 박스 가져오기
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
//파밍 단계 박스들
function StepBox(props) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "175.5px",
                    height: "66px",
                    border: "2px solid #D3D3D3",
                    borderRadius: "16.68px",
                    backgroundColor: "", //배경투명
                    margin: "10px",
                }}
            >
                <div style={{ margin: "20px" }}>{props.stepname}</div>
            </div>
        </div>
    );
}
//파밍 현황 박스들

//파밍 기본 정보
function Info(props) {
    {
        /*파밍단계 정보*/
    }
    const steplists = [];
    for (let i = 0; i < props.stepinfo.length; i++) {
        steplists.push(props.stepinfo[i].info);
    }
    {
        /* 파밍 현황 정보*/
    }
    const currentlists = [];
    for (let j = 0; j < props.currentinfo.length; j++) {
        console.log(props.currentinfo[j].info);
        currentlists.push(props.currentinfo[j].info);
    }
    return (
        <div>
            <nameAnddate>
                <div
                    className="nameanddate"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}
                >
                    <div style={{ fontSize: "30px" }}> 파밍러</div>
                    <div style={{ fontSize: "30px" }}>{props.name}</div>
                    <div style={{ fontSize: "30px" }}>파밍 기간</div>
                    <div style={{ fontSize: "30px" }}>{props.date}</div>
                </div>
            </nameAnddate>
            <div className="infoabout" style={{ margin: "60px" }}>
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    파밍설명
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        fontSize: "30px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            //justifyContent: "center",
                            width: "1098px",
                            height: "143px",
                            border: "2px solid #D3D3D3",
                            borderRadius: "16.68px",
                            backgroundColor: "", //배경투명
                            margin: "10px",
                        }}
                    >
                        <div style={{ margin: "30px", fontSize: "20px" }}>
                            {props.detail}
                        </div>
                    </div>
                </div>
            </div>
            <div className="steps" style={{ margin: "60px" }}>
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    파밍 단계
                </div>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            fontSize: "18px",
                        }}
                    >
                        {props.stepinfo.map(
                            (step, index) =>
                                index < 5 && (
                                    <StepBox
                                        key={index}
                                        stepname={step.info}
                                    ></StepBox>
                                )
                        )}
                    </div>
                </div>
            </div>
            <div className="stepsCurrent" style={{ margin: "60px" }}>
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    파밍 현황{" "}
                </div>
                <div>
                    {/*option은 1이면 완료=진한 핑크, 0이면 미완료=연한핑크 */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        {props.currentinfo.map(
                            (step, index) =>
                                index < 5 && (
                                    <CurrentBox
                                        key={index}
                                        stepname={step.info}
                                        option={step.option}
                                        type={props.type} /*레저등등 옵션 */
                                    ></CurrentBox>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

//이미지랑 현재 단계

function ExperiencePersonal() {
    const steplist = [
        { info: "50,000원 모으기", option: "1" },
        { info: "30,000원 모으기", option: "1" },
        { info: "30,000원 모으기", option: "1" },
        { info: "30,000원 모으기", option: "1" },
        { info: "30,000원 모으기", option: "0" },
    ];
    const currentsteplist = [
        { info: "50,000원 모으기", option: "1" },
        { info: "30,000원 모으기", option: "1" },
        { info: "60,000원 모으기", option: "1" },
        { info: "70,000원 모으기", option: "1" },
        { info: "80,000원 모으기", option: "1" },
    ];
    const infopersonal = [
        {
            name: "김지은",
            date: "2023.01.02 ~ 2023.12.14",
            detail: "두바이에서 진경을 바라보며 열기구를 타보고 싶었던 꿈, 한 번 이뤄보자!",
            option: "1",
            type: "2" /*레저 관광 기타 */,
        },
    ];
    return (
        <div style={{ backgroundColor: "black" }}>
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
                    <img
                        src={eximg1}
                        style={{
                            width: "314px",
                            height: "312px",
                            borderRadius: "44px",
                            marginRight: "50px",
                        }}
                    ></img>
                    <Graph stepinfo={steplist} option="3"></Graph>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "60px",
                        flexDirection: "column",
                    }}
                >
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                flexDirection: "column",
                            }}
                        >
                            <name
                                style={{
                                    fontSize: "55px",
                                    color: "white",
                                    border: "bold",
                                    margin: "20px",
                                    marginBottom: "50px",
                                }}
                            >
                                열기구 체험
                            </name>
                            <Info
                                name={infopersonal[0].name}
                                date={infopersonal[0].date}
                                detail={infopersonal[0].detail}
                                option={infopersonal[0].option}
                                type={infopersonal[0].type} /*레저 관광 기타 */
                                stepinfo={steplist}
                                currentinfo={currentsteplist}
                            ></Info>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                //justifyContent: "center",
                                marginTop: "400px",
                                color: "white",
                                flexDirection: "column",
                            }}
                        >
                            <div>
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
                                    <div>유사한 파밍</div>
                                    <div
                                        style={{
                                            marginTop: "9px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        <img src={iconmove2}></img>
                                    </div>
                                </div>
                                <Recommend></Recommend>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePersonal;
