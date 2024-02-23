import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext'; // 인증 상태 관리를 위한 컴포넌트

// 페이지 컴포넌트 임포트
import Mainpage from "./pages/mainpage"; // 기존에 있던 메인 페이지
import Login from "./pages/login"; // 로그인 페이지
import Join from "./pages/join"; // 회원가입 페이지

// App.css 임포트는 여러분의 프로젝트 구조에 따라 조정해주세요.
import "./App.css";

const App = () => {
  return (
    <AuthProvider> {/* 모든 라우트를 AuthProvider로 감싸 인증 상태 관리 */}
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} /> {/* 메인 페이지 */}
          <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
          <Route path="/join" element={<Join />} /> {/* 회원가입 페이지 */}
          {/* 필요한 경우 여기에 추가 라우트를 추가할 수 있습니다 */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
