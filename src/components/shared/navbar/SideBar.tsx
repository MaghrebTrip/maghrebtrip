import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav id="sidebar" className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <Link className="navbar-brand ps-2 mt-2 mb-3" to="/">
        <img
          src="./logo.png"
          alt="logo"
          height="40"
          className="d-inline-block align-text-center me-2"
        />
        MaghrebTrip
      </Link>
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <Link
            to="/admin"
            className={`nav-link ${currentPath === "/admin" ? "active" : ""}`}
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/tourists-management"
            className={`nav-link ${
              currentPath === "/admin/tourists-management" ? "active" : ""
            }`}
          >
            Tourists
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/cities-management"
            className={`nav-link ${
              currentPath === "/admin/cities-management" ? "active" : ""
            }`}
          >
            Cities
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/hotels-management"
            className={`nav-link ${
              currentPath === "/admin/hotels-management" ? "active" : ""
            }`}
          >
            Hotels
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link
            to="/admin/restaurants-management"
            className={`nav-link ${
              currentPath === "/admin/restaurants-management" ? "active" : ""
            }`}
          >
            Restaurants
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link
            to="/admin/monuments-management"
            className={`nav-link ${
              currentPath === "/admin/monuments-management" ? "active" : ""
            }`}
          >
            Monuments
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/feedbacks-management"
            className={`nav-link ${
              currentPath === "/admin/feedbacks-management" ? "active" : ""
            }`}
          >
            Feedbacks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
