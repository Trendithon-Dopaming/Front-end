import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
