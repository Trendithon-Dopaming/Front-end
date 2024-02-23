import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Layout from "./components/layout";
import Mainpage from "./pages";
import Login from "./pages/login";
import Join from "./pages/join";
import Mypage from "./pages/mypage";
import Mypaming from "./pages/mypaming";
import ExperiencePersonal from "./pages/experiencepersonal";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypaming" element={<Mypaming />} />
            <Route path="/experience" element={<ExperiencePersonal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
