import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Routes
import PublicRoutes from "./utils/PublicRoutes";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DownloadPage from "./pages/DownloadPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Private Routes
import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardPage from "./pages/admin/DashboardPage";
import ManagementPage from "./pages/admin/ManagementPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<PublicRoutes />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="/admin/*" element={<PrivateRoutes />}>
              <Route index element={<DashboardPage />} />
              <Route
                path="tourists-management"
                element={<ManagementPage section={"tourists"} />}
              />
              <Route
                path="cities-management"
                element={<ManagementPage section={"cities"} />}
              />
              <Route
                path="hotels-management"
                element={<ManagementPage section={"hotels"} />}
              />
              <Route
                path="restaurants-management"
                element={<ManagementPage section={"restaurants"} />}
              />
              <Route
                path="monuments-management"
                element={<ManagementPage section={"monuments"} />}
              />
              <Route
                path="feedbacks-management"
                element={<ManagementPage section={"feedbacks"} />}
              />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
