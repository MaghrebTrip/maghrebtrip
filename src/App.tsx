import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Routes
import PublicRoutes from "./utils/PublicRoutes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DownloadPage from "./pages/DownloadPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Private Routes
// ...


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
