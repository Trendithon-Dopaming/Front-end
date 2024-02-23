import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages";
import Login from "./pages/login";
import Join from "./pages/join";
import Mypage from "./pages/mypage";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
