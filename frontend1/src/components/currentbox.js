function CurrentBox(props) {
    // 옵션에 따라 배경 색상 설정
    // 옵션에 따라 배경 색상 설정
    let backgroundColorc;
    let backgroundColornotc;
    switch (props.type) {
        case "1":
            backgroundColorc = "#673C4F";
            backgroundColornotc = "#CAA5B6";
            break;
        case "2":
            backgroundColorc = "#726E97";
            backgroundColornotc = "#BAB8CC";
            break;
        case "3":
            backgroundColorc = "#7698B3";
            backgroundColornotc = "#B0C4D4";
            break;
        default:
            backgroundColorc = "#673C4F";
            backgroundColornotc = "#CAA5B6";
            break;
    }

    let backgroundColor;
    if (props.option === 1) {
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

export default CurrentBox;
