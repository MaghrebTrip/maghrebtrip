import BannerTop from "../components/shared/banner/BannerTop";
import BannerBottom from "../components/shared/banner/BannerBottom";
import Login from "../components/login/Login";

function LoginPage() {
  return (
    <>
      <BannerTop />
      <Login />
      <BannerBottom />
    </>
  );
}

export default LoginPage;
