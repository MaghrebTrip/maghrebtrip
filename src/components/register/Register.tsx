import "./Register.css";
import logo_bg from "../../assets/img/maghrebtrip_logo_bg.png";

function Register() {
  return (
    <section id="register" className="register">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-lg-6">
            <div className="register-text p-5">
              <h2 className="display-4">Register</h2>
              <p>
                Create an account to access exclusive features and benefits.
              </p>
              <form>
                <div className="form-group mb-3">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="first-name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="last-name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        required
                      />
                    </div>
                  </div>
                </div>
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
                  <div className="row">
                    <div className="col">
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
                    <div className="col">
                      <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirm-password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="register-img">
              <img className="img-fluid" src={logo_bg} alt="Register" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
