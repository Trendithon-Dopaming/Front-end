import React, { useState } from 'react';
import '../styles/ModifyingPaming.css';
import Header from '../components/header';
import Footer from '../components/footer';
import parisImage from '../components/paris.png';
import Modal from '../components/Modal';

function ModifyingPaming() {
    const [showModal, setShowModal] = useState(false);
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
                    <input type="text" id="input" name="paming-name" value="파리 샹도마르 공원에서 와인마시기" />                    <p id='note'>*최대 20자까지 입력할 수 있어요.</p>
                </div>
                <div className="description">
                    <p id="description">설명</p>
                    <input type="text" id="input" name="paming-name" value="어릴 적 한 영화에서 보았던 파리 샹도마르 공원에서 와인 마시기하기 !! " />
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
                    <div className="img-preview">
                        <img
                            src={parisImage}
                            alt="Paris"
                            style={{
                                width: '273px',
                                height: '198px',
                                flexShrink: 0,
                                borderRadius: '25px',
                                marginRight: '170px',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                        />
                    </div>
                    <p id="img">대표 이미지</p>
                </div>
                <div class="paming-period">
                    <div class="paming-label">
                        <p id="paming-period">파밍 기간</p><p id='star'>*</p>
                    </div>
                    <div class="input-container">
                        <input type="text" id="input-start" name="paming-period-start" value="2024.01.01" />
                        <input type="text" id="input-end" name="paming-period-end" value="2024.03.04" />
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
                            id='tourism2'
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
                            id='domestic2'
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
                            id='public2'
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
                <div className="modify">
                    <div className='modify-btn'>
                        <button
                            id='modify'
                            className={activeRegistration === 'registration' ? 'active' : ''}
                            onClick={() => {
                                handleRegistrationClick('registration');
                                setShowModal(true);
                            }}
                        >
                            파밍로그 수정하기
                        </button>
                    </div>
                </div>
                <div>

                    <Modal showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ModifyingPaming;
