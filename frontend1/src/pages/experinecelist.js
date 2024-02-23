import { Link } from "react-router-dom";
import AdImgData from "../styles/AdImgArray";
import { useState } from "react";
import eximg1 from "../assets/ad_Ex2.jpg";
import eximg2 from "../assets/ad_Ex1.jpg";
import ListBox from "../components/listbox";

// 이미지 슬라이드
function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const moveSlide = (index) => {
        setSlideIndex(index);
    };

    console.log("AdImgData:", AdImgData);

    return (
        <div
            //스타일
            style={{
                width: "1131px",
                height: "468px",
                margin: "200px auto",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                borderRadius: "49px",
                backgroundColor: "black",
            }}
        >
            {AdImgData.map((character, index) => (
                <div
                    key={character.id}
                    className={index === slideIndex ? "slide active" : "slide"}
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        rowGap: "20px",
                        opacity: index === slideIndex ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                >
                    <img
                        src={character.img}
                        style={{
                            width: "1131px",
                            height: "468px",
                            margin: "200px auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            marginTop: "0",
                            marginBottom: "0",
                            borderRadius: "49px",
                        }}
                    />
                </div>
            ))}
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {AdImgData.map((character, index) => (
                    <div
                        key={character.id}
                        className={index === slideIndex ? "dot active" : "dot"}
                        style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor:
                                index === slideIndex ? "grey" : "black",
                            cursor: "pointer",
                            margin: "0 5px",
                        }}
                        onClick={() => moveSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

// 카테고리 선택 박스
// 카테고리 선택 박스
const SelectBox = (props) => {
    return (
        <select
            style={{
                width: "249px", // 너비 조정
                height: "56px", // 높이 조정
                borderRadius: "10px",
                fontSize: "20px", // 폰트 크기 조정

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

// ListBox 그룹을 반환하는 함수
const groupListings = (listings, itemsPerGroup) => {
    const grouped = [];
    for (let i = 0; i < listings.length; i += itemsPerGroup) {
        grouped.push(listings.slice(i, i + itemsPerGroup));
    }
    return grouped;
};

// ListBox 그룹을 렌더링하는 함수
const renderListingsGroup = (group) => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
        }}
    >
        {group.map((listing, index) => (
            <div
                key={index}
                style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                }}
            >
                {listing.map((item, idx) => (
                    <ListBox
                        key={idx}
                        img={item.img}
                        name={item.name}
                        date={item.date}
                    />
                ))}
            </div>
        ))}
    </div>
);

function ExList() {
    // 분야 카테고리
    const optionField = [
        { value: 1, name: "래저, 액티비티" },
        { value: 2, name: "관광" },
        { value: 3, name: "기타" },
    ];
    // 지역 카테고리
    const optionCountry = [
        { value: 2.1, name: "국내" },
        { value: 2.2, name: "해외" },
    ];
    // 정렬 카테고리
    const optionSort = [
        { value: 3.1, name: "최신순" },
        { value: 3.2, name: "조회순" },
    ];

    // 샘플 데이터
    const listings = [
        { img: eximg1, name: "패러글라이딩", date: "2023.01.02~2023.12.24" },
        { img: eximg1, name: "비행기", date: "2023.01.02~2023.12.24" },
        { img: eximg1, name: "도쿄타워", date: "2023.01.02~2023.12.24" },
        { img: eximg1, name: "목록4", date: "날짜4" },
        { img: eximg1, name: "목록5", date: "날짜5" },
        { img: eximg1, name: "목록6", date: "날짜6" },
        { img: eximg1, name: "목록7", date: "날짜7" },
        { img: eximg1, name: "목록8", date: "날짜8" },
        { img: eximg1, name: "목록9", date: "날짜9" },
        { img: eximg1, name: "목록10", date: "날짜10" },
        { img: eximg1, name: "목록11", date: "날짜11" },
        { img: eximg1, name: "목록12", date: "날짜12" },
        { img: eximg1, name: "목록13", date: "날짜13" },
        { img: eximg1, name: "목록4", date: "날짜4" },
        { img: eximg1, name: "목록5", date: "날짜5" },
        { img: eximg1, name: "목록6", date: "날짜6" },
        { img: eximg1, name: "목록7", date: "날짜7" },
        { img: eximg1, name: "목록8", date: "날짜8" },
        { img: eximg1, name: "목록9", date: "날짜9" },
        { img: eximg1, name: "목록10", date: "날짜10" },
        { img: eximg1, name: "목록11", date: "날짜11" },
        { img: eximg1, name: "목록12", date: "날짜12" },
        { img: eximg1, name: "목록13", date: "날짜13" },
        { img: eximg1, name: "목록4", date: "날짜4" },
        { img: eximg1, name: "목록5", date: "날짜5" },
        { img: eximg1, name: "목록6", date: "날짜6" },
        { img: eximg1, name: "목록7", date: "날짜7" },
        { img: eximg1, name: "목록8", date: "날짜8" },
        { img: eximg1, name: "목록9", date: "날짜9" },
        { img: eximg1, name: "목록10", date: "날짜10" },
        { img: eximg1, name: "목록11", date: "날짜11" },
        { img: eximg1, name: "목록12", date: "날짜12" },
        { img: eximg1, name: "목록13", date: "날짜13" },
        { img: eximg1, name: "목록4", date: "날짜4" },
        { img: eximg1, name: "목록5", date: "날짜5" },
        { img: eximg1, name: "목록6", date: "날짜6" },
        { img: eximg1, name: "목록7", date: "날짜7" },
        { img: eximg1, name: "목록8", date: "날짜8" },
        { img: eximg1, name: "목록9", date: "날짜9" },
        { img: eximg1, name: "목록10", date: "날짜10" },
        { img: eximg1, name: "목록11", date: "날짜11" },
        { img: eximg1, name: "목록12", date: "날짜12" },
        { img: eximg1, name: "목록13", date: "날짜13" },
        { img: eximg1, name: "목록4", date: "날짜4" },
        { img: eximg1, name: "목록5", date: "날짜5" },
        { img: eximg1, name: "목록6", date: "날짜6" },
        { img: eximg1, name: "목록7", date: "날짜7" },
        { img: eximg1, name: "목록8", date: "날짜8" },
        { img: eximg1, name: "목록9", date: "날짜9" },
        { img: eximg1, name: "목록10", date: "날짜10" },
        { img: eximg1, name: "목록11", date: "날짜11" },
        { img: eximg1, name: "목록12", date: "날짜12" },
        { img: eximg1, name: "목록13", date: "날짜13" },
    ];

    // 페이지네이션을 위한 상태
    const [currentPage, setCurrentPage] = useState(0);

    // 한 페이지당 보여줄 ListBox 수
    const itemsPerRow = 3;
    const rowsPerPage = 4;

    // 현재 페이지에 대한 목록 그룹 렌더링
    const currentPageListings = groupListings(
        listings,
        itemsPerRow * rowsPerPage
    )[currentPage];

    // 페이지네이션 숫자 목록 생성
    const paginationNumbers = Array.from(
        { length: Math.ceil(listings.length / (itemsPerRow * rowsPerPage)) },
        (_, index) => index + 1
    );

    // 페이지를 변경하는 함수
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    className="optionboxs"
                    style={{ display: "flex", marginBottom: "20px" }}
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
                        <div style={{ margin: "10px" }}>
                            <SelectBox
                                option={optionSort}
                                category="정렬"
                            ></SelectBox>
                        </div>
                    </div>
                </div>
                {/* 현재 페이지의 목록 그룹 렌더링 */}
                {currentPageListings &&
                    renderListingsGroup(
                        groupListings(currentPageListings, itemsPerRow)
                    )}
                {/* 페이지네이션 숫자 목록 */}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    {paginationNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => goToPage(number - 1)}
                            style={{
                                margin: "5px",
                                opacity: 0.7, // 불투명도 조절
                                background: "rgba(255, 255, 255, 0.5)", // 배경색 불투명하게
                                border: "none", // 테두리 없애기
                            }}
                            disabled={number - 1 === currentPage}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <main
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <Slider></Slider>
                </div>
                <ExList></ExList>
            </main>
        </div>
    );
}

export default Experience;
