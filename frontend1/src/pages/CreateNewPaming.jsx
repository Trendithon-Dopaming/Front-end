import React, { useState } from 'react';
import '../styles/CreateNewPaming.css';
import Header from '../components/header';
import Footer from '../components/footer';

function CreateNewPaming() {
    const [pamingStages, setPamingStages] = useState([]); // 상태 초기화
    const [showNote, setShowNote] = useState(true); // 버튼이 생성될 때 노트 표시 여부 상태
    const [imageUrl, setImageUrl] = useState(null); // 이미지 URL 상태 추가
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeArea, setActiveArea] = useState(null);
    const [activeDisclosureStatus, setActiveDisclosureStatus] = useState(null);
    const [activeRegistration, setActiveRegistration] = useState(null);

    const handleRegistrationClick = (id) => {
        setActiveRegistration(id);
    };
    const handleDisclosureStatusClick = (id) => {
        setActiveDisclosureStatus(id);
    };
    const handleAreaClick = (id) => {
        setActiveArea(id);
    };
    const handleCategoryClick = (id) => {
        setActiveCategory(id);
    };
    // 파밍 단계 추가하는 함수
    const handleAddStage = () => {
        const inputElement = document.getElementById('input2');
        const stageName = inputElement.value;
        if (stageName && pamingStages.length < 5) { // 값이 있고, 5개 미만일 때만 추가
            setPamingStages([...pamingStages, stageName]);
            inputElement.value = ''; // 입력 후 입력창 초기화
        }
        if (pamingStages.length >= 0 && pamingStages.length <= 4) {
            setShowNote(false); // 버튼이 2개 이상 5개 이하일 때 노트 숨기기
        }
    };

    // 파밍 단계 삭제하는 함수
    const handleDeleteStage = (index) => {
        const updatedStages = [...pamingStages];
        updatedStages.splice(index, 1);
        setPamingStages(updatedStages);
        if (updatedStages.length < 1 || updatedStages.length > 4) {
            setShowNote(true); // 단계가 1개 이하거나 5개 이상일 때 노트 표시
        }
    };

    // 이미지를 추가하는 함수
    const handleAddImage = (e) => {
        const file = e.target.files[0]; // 선택된 파일을 가져옵니다.

        // 파일을 읽기 위한 FileReader 객체를 생성합니다.
        const reader = new FileReader();

        reader.onload = (event) => {
            const imageUrl = event.target.result; // 이미지의 데이터 URL을 가져옵니다.
            // 이미지를 보여주는 데 사용할 상태를 업데이트합니다.
            setImageUrl(imageUrl);
        };

        if (file) {
            reader.readAsDataURL(file); // 파일을 읽어 데이터 URL을 생성합니다.
        }
    };

    return (
        <div>
            <Header />
            <div className='title'>
                <p id="titlename">새 파밍로그 만들기</p>
                <div className="text-container">
                    <p id="subtitle">나만의 특별한 파밍로그를 만들어보세요!</p>
                    <p id='caution'>*표시가 있는 항목은 필수 항목입니다</p>
                </div>
                <div className="paming-name">
                    <p id="paming-name">파밍로그 명</p><p id='star'>*</p>
                    <input type="text" id="input" name="paming-name" placeholder="파밍로그 이름을 입력해주세요." />
                    <p id='note'>*최대 20자까지 입력할 수 있어요.</p>
                </div>
                <div className="description">
                    <p id="description">설명</p>
                    <input type="text" id="input" name="paming-name" placeholder="경험을 이루고 싶은 이유, 나의 다짐 등을 적어주세요!" />
                    <p id='note'>*최대 100자까지 입력할 수 있어요.</p>
                </div>
                <div className="paming-stage">
                    <p id="paming-stage">파밍 단계</p><p id='star'>*</p>
                    <input type="text" id="input2" name="paming-name" placeholder="경험을 이뤄나갈 파밍 단계를 생성해주세요." />
                    <button id='plusbtn' onClick={handleAddStage}>+</button>
                    {showNote && <p id='plusnote'>*최소 2개에서 최대 5개까지 생성 가능합니다.</p>}
                </div>
                {/* 파밍 단계 목록 표시 */}
                <ul>
                    {pamingStages.map((stage, index) => (
                        <li key={index} className="list-item">
                            <span>{stage}</span>
                            <button className="delete-button" onClick={() => handleDeleteStage(index)}>X</button>
                        </li>
                    ))}
                </ul>
                <div className="img-container" style={{ display: 'flex', alignItems: 'center' }}>
                    {/* 이미지 미리보기 */}
                    {imageUrl && (
                        <div className="img-preview">
                            {/* 이미지 미리보기 */}
                            <div className="image-preview">
                                <img
                                    src={imageUrl}
                                    alt="Uploaded"
                                    style={{
                                        width: '273px',
                                        height: '198px',
                                        flexShrink: 0
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <p id="img">대표 이미지</p>
                    <div className="img" onClick={() => document.getElementById('fileInput').click()} style={{ display: imageUrl ? 'none' : 'block' }}>
                        <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAddImage} />
                        <svg xmlns="http://www.w3.org/2000/svg" id="viewbox" width="28" height="36" viewBox="0 0 28 36" fill="none">
                            <path d="M1.74829 9.25073V26.7507C1.74829 30.0506 1.74829 31.7005 2.77342 32.7256C3.79854 33.7507 5.44846 33.7507 8.74829 33.7507H19.2483C22.5481 33.7507 24.198 33.7507 25.2232 32.7256C26.2483 31.7005 26.2483 30.0506 26.2483 26.7507V13.2433C26.2483 11.708 26.2483 10.9403 25.9455 10.2606C25.6428 9.58078 25.0722 9.06726 23.931 8.04021L19.4949 4.04767C18.508 3.15948 18.0146 2.71539 17.4091 2.48306C16.8037 2.25073 16.1398 2.25073 14.8121 2.25073H8.74829C5.44846 2.25073 3.79854 2.25073 2.77342 3.27586C1.74829 4.30099 1.74829 5.9509 1.74829 9.25073Z" stroke="white" strokeWidth="3.5" />
                            <path d="M15.7483 2.25073V5.75073C15.7483 9.05056 15.7483 10.7005 16.7734 11.7256C17.7985 12.7507 19.4485 12.7507 22.7483 12.7507H26.2483" stroke="white" strokeWidth="3.5" />
                        </svg>
                        <p id='imgnote'>*1장만 선택해주세요.</p>
                    </div>
                </div>
                <div class="paming-period">
                    <div class="paming-label">
                        <p id="paming-period">파밍 기간</p><p id='star'>*</p>
                    </div>
                    <div class="input-container">
                        <input type="text" id="input-start" name="paming-period-start" placeholder="시작 기간을 입력해주세요.(YY.MM.DD)" />
                        <input type="text" id="input-end" name="paming-period-end" placeholder="종료 기간을 입력해주세요.(YY.MM.DD)" />
                    </div>
                </div>
                <div className="category">
                    <p id="category">카테고리</p><p id='star'>*</p>
                    <div className='category-btn'>
                        <button
                            id='leisure-activity'
                            className={activeCategory === 'leisure-activity' ? 'active' : ''}
                            onClick={() => handleCategoryClick('leisure-activity')}
                        >
                            레저/액티비티
                        </button>
                        <button
                            id='tourism'
                            className={activeCategory === 'tourism' ? 'active' : ''}
                            onClick={() => handleCategoryClick('tourism')}
                        >
                            관광
                        </button>
                        <button
                            id='etc'
                            className={activeCategory === 'etc' ? 'active' : ''}
                            onClick={() => handleCategoryClick('etc')}
                        >
                            기타
                        </button>
                    </div>
                </div>
                <div className="area">
                    <p id="area">지역</p><p id='star'>*</p>
                    <div className='area-btn'>
                        <button
                            id='domestic'
                            className={activeArea === 'domestic' ? 'active' : ''}
                            onClick={() => handleAreaClick('domestic')}
                        >
                            국내
                        </button>
                        <button
                            id='foreign'
                            className={activeArea === 'foreign' ? 'active' : ''}
                            onClick={() => handleAreaClick('foreign')}
                        >
                            국외
                        </button>
                    </div>
                </div>
                <div className="disclosureStatus">
                    <p id="disclosureStatus">공개 여부</p><p id='star'>*</p>
                    <div className='disclosureStatus-btn'>
                        <button
                            id='public'
                            className={activeDisclosureStatus === 'public' ? 'active' : ''}
                            onClick={() => handleDisclosureStatusClick('public')}
                        >
                            공개
                        </button>
                        <button
                            id='private'
                            className={activeDisclosureStatus === 'private' ? 'active' : ''}
                            onClick={() => handleDisclosureStatusClick('private')}
                        >
                            비공개
                        </button>
                    </div>
                </div>
                <div className="registration">
                    <div className='registration-btn'>
                        <button
                            id='registration'
                            className={activeRegistration === 'registration' ? 'active' : ''}
                            onClick={() => handleRegistrationClick('registration')}
                        >
                            파밍로그 등록하기
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateNewPaming;
