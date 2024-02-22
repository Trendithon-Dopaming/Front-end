import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages";
import Login from "./pages/login";
import Join from "./pages/join";
import Mypage from "./pages/mypage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
