import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container px-5 py-1">
        <Link className="navbar-brand" to="/">
          <img
            src="./logo.png"
            alt="logo"
            height="40"
            className="d-inline-block align-text-center me-2"
          />
          MaghrebTrip
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${currentPath === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  currentPath === "/about" ? "active" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/download"
                className={`nav-link ${
                  currentPath === "/download" ? "active" : ""
                }`}
              >
                Download
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  currentPath === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/register" className="btn register me-2">
              Register
            </Link>
            <Link to="/login" className="btn login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
