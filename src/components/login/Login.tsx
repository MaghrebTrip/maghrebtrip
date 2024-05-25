import "./Login.css";
import logo_bg from "../../assets/img/maghrebtrip_logo_bg.png";

function Login() {
  return (
    <section id="login" className="login">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="login-text p-5">
              <h2 className="display-4">Log In</h2>
              <p>Log in to access your account and plan your next adventure.</p>

              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                </div>
                <button type="submit" className="btn px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="login-img">
              <img className="img-fluid" src={logo_bg} alt="Log In" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
