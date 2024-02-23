import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import Mypaming from "./pages/mypaming.js";
import Finshed from "./pages/finshedpaming.js";
import ExperiencePersonal from "./pages/experiencepersonal.js";
import Experience from "./pages/experinecelist.js";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/experiencepersonal"
                        element={<ExperiencePersonal />}
                    />
                    <Route path="/experiencelist" element={<Experience />} />
                    <Route path="/finshed" element={<Finshed />} />
                    <Route path="/mypaming" element={<Mypaming />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
=======
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
>>>>>>> 8661b8da381ba5335306a97a4ca06738a787d90c
};

export default App;
