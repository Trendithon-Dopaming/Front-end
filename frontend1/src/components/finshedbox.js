function Finshedbox(props) {
    // 옵션에 따라 배경 색상 설정
    let backgroundColor;
    if (props.option === 1) {
        backgroundColor = "#673C4F";
    } else {
        backgroundColor = "#CAA5B6";
    }

    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    width: "200px",
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

export default Finshedbox;
