import React, { useState } from 'react';
import parisImage from '../assets/paris.png';
import '../styles/MyParm.css';
import paraglidingImage from '../assets/paragliding.png'
import Header from '../components/header';
import Footer from '../components/footer';
import airballonImage from '../assets/airballon.png';
import bookshopImage from '../assets/bookshop.png';
import bungeeImage from '../assets/bungee.png';
import laosImage from '../assets/laos.png';
import snorkelingImage from '../assets/snorkeling.png';
import surfingImage from '../assets/surfing.png';
import tokyoImage from '../assets/tokyo.png';

const cardsData = [
    {
        title: '패러글라이딩',
        image: paraglidingImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '열기구 체험',
        image: airballonImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '파리 샹도마르 공원에서',
        image: parisImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '서핑',
        image: surfingImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '번지점프',
        image: bungeeImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '스노클링',
        image: snorkelingImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '노팅힐 북 샵 방문하기',
        image: bookshopImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '도쿄 유니버셜 스튜디오',
        image: tokyoImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    {
        title: '라오스 블루라군 액티비',
        image: laosImage, // 실제 이미지 경로로 대체하세요
        dateRange: '2023.01.02 - 2023.12.14'
    },
    // ...더 많은 카드 데이터
];

const Card = ({ title, image, dateRange }) => (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-info">
            <div className='card-title-container'>
                <h2 className="card-title">{title}</h2>
                <h2><span className="card-arrow">{'>'}</span></h2>
            </div>
            <div className="card-date-and-icon">
                <p className="card-date">{dateRange}</p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M13.3032 5.73511L11.5868 3.44658C11.0253 2.69791 10.7446 2.32358 10.3419 2.12224C9.93922 1.9209 9.4713 1.9209 8.53546 1.9209H5.6748C3.87677 1.9209 2.97775 1.9209 2.41917 2.47948C1.8606 3.03805 1.8606 3.93707 1.8606 5.7351L1.8606 15.2706C1.8606 17.0687 1.8606 17.9677 2.41917 18.5263C2.97775 19.0848 3.87677 19.0848 5.6748 19.0848H15.2103C17.0084 19.0848 17.9074 19.0848 18.466 18.5263C19.0245 17.9677 19.0245 17.0687 19.0245 15.2706V9.54931C19.0245 7.75128 19.0245 6.85226 18.466 6.29368C17.9074 5.73511 17.0084 5.73511 15.2103 5.73511H13.3032ZM13.3032 5.73511H1.8606" stroke="white" stroke-width="1.9071" stroke-linecap="round" />
                </svg>
            </div>
        </div>
    </div>
);

const CardsDisplay = () => {
    return (
        <div>
            <Header />
            <div className='save-parm'>
                <h1 className="save-title"><svg xmlns="http://www.w3.org/2000/svg" id='card-arrow2' width="27" height="52" viewBox="0 0 27 52" fill="none">
                    <path d="M23.3753 3.66683L8.93802 18.1041C5.21579 21.8264 3.35468 23.6875 3.35468 26.0002C3.35468 28.3129 5.21579 30.174 8.93802 33.8962L23.3753 48.3335" stroke="white" stroke-width="5.58333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>저장 팜</h1>
            </div>
            <div className="cards-container">
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} dateRange={card.dateRange} />
                ))}
            </div>
            <div className='pagenumber'>
                <p id='num1'>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p>
            </div>
            <Footer />
        </div>
    );
};

export default CardsDisplay;