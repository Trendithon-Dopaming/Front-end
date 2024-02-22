import { Link } from "react-router-dom";
import "../styles/listbox.css";
import iconmove from "../assets/chevron-right (1).png";
import foldericon from "../assets/folder.png";
//목록 박스
const ListBox = (props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="listbox"
                style={{
                    width: "343.32px",
                    height: "361.95px",
                    borderRadius: "7.63px",
                    border: "0.95px solid white",
                    backgroundColor: "black",
                    borderColor: "white",
                }}
            >
                <div className="totalinfomation">
                    <Link
                        to="./"
                        style={{ textDecoration: "none", borderColor: "white" }}
                    >
                        <box href={"/"}>
                            <div className="img">
                                <img
                                    src={props.img}
                                    style={{
                                        width: "301.32px",
                                        height: "226.95px",
                                        borderRadius: "7.63px",
                                    }}
                                />
                            </div>
                            <div className="name" style={{ marginTop: "20px" }}>
                                <div
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "23.84px",
                                    }}
                                >
                                    {" "}
                                    {props.name}{" "}
                                </div>{" "}
                                <div
                                    style={{
                                        margin: "5px",
                                        marginLeft: "25px",
                                    }}
                                >
                                    <img src={iconmove}></img>
                                </div>
                            </div>
                            <div className="date" style={{ marginTop: "20px" }}>
                                <div
                                    style={{
                                        color: "#808080",
                                        fontSize: "19.07px",
                                    }}
                                >
                                    {props.date}
                                </div>{" "}
                                <div>
                                    <img src={foldericon}></img>
                                </div>
                            </div>
                        </box>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListBox;
