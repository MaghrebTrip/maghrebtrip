import "./Download.css";
import { PiAppleLogoBold, PiGooglePlayLogoBold } from "react-icons/pi";
import mobile1 from "../../assets/img/mobile1.png";

function Download() {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-lg-6">
            <div className="download-text p-0 p-md-5">
              <h2 className="display-4">Start your Maghreb Trip now!</h2>
              <p>
                Download the MaghrebTrip app to your smartphone or tablet to
                start planning your adventure today. With its intuitive
                interface and comprehensive database, MaghrebTrip ensures that
                your journey through Morocco is nothing short of extraordinary.
              </p>
              <div className="download-btns">
                <a href="https://play.google.com/" className="btn me-2 mb-2">
                  <span>
                    Download on <PiGooglePlayLogoBold />
                  </span>
                </a>
                <a href="https://apps.apple.com/" className="btn mb-2">
                  <span>
                    Download on <PiAppleLogoBold />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="download-img p-3">
              <img className="img-fluid" src={mobile1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
