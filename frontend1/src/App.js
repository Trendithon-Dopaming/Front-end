import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages";
import Login from "./pages/login";
import Join from "./pages/join";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
