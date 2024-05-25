import NavBar from "../components/shared/navbar/NavBar";
import Footer from "../components/shared/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
