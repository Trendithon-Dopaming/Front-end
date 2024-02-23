import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './components/AuthContext'; //인증상태 관리
//페이지
import Mainpage from "./pages/mainpage";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/mainpage" element={<Mainpage />}></Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
