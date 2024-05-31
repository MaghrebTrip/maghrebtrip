import SideBar from "../components/shared/navbar/SideBar";
import { Outlet } from "react-router-dom";

function PrivateRoutes() {
  return (
    <>
      <div className="row g-0" style={{height: "100vh", overflow: "hidden"}}>
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PrivateRoutes;
