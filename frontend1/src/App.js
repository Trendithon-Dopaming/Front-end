import { BrowserRouter, Routes, Route } from "react-router-dom";

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
};

export default App;
