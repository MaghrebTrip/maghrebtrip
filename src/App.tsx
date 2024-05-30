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
import TouristsManagementPage from "./pages/admin/TouristsManagementPage";
import CitiesManagementPage from "./pages/admin/CitiesManagementPage";
import AttractionsManagementPage from "./pages/admin/AttractionsManagementPage";
import PlansManagementPage from "./pages/admin/PlansManagementPage";
import FeedbacksManagementPage from "./pages/admin/FeedbacksManagementPage";

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
              <Route path="tourists-management" element={<TouristsManagementPage />} />
              <Route path="cities-management" element={<CitiesManagementPage />} />
              <Route path="attractions-management" element={<AttractionsManagementPage />} />
              <Route path="plans-management" element={<PlansManagementPage />} />
              <Route path="feedbacks-management" element={<FeedbacksManagementPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
