import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//페이지
import Mainpage from "./pages/mainpage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/mainpage" element={<Mainpage />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
