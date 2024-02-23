import React, { useState } from 'react';
import '../assets/Modal.css'; // 모달 컴포넌트의 스타일을 위한 CSS 파일

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <p>수정이 완료되었습니다.</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => setShowModal(false)}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
