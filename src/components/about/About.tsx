import "./About.css";
import logo_bg from "../../assets/img/maghrebtrip_logo_bg.png"

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <div className="about-text p-5">
              <h2 className="display-4">About Us</h2>
              <p>
                MaghrebTrip is your go-to virtual guide for uncovering the
                marvels of the Maghreb region. Designed to make your trip truly
                memorable, it offers personalized itineraries tailored to your
                preferences. Whether you're fascinated by ancient history,
                tantalized by local cuisine, or seeking adventure in
                breathtaking landscapes, MaghrebTrip suggests the perfect
                activities and attractions to suit your interests.
              </p>
              <p>
                From arranging visits to iconic monuments to recommending hidden
                gems off the beaten path, this app has you covered every step of
                the way. With its intuitive interface and comprehensive
                database, MaghrebTrip ensures that your journey through Morocco
                is nothing short of extraordinary.
              </p>
            </div>
          </div>
          <div className="col-lg-5 order-lg-1">
            <div className="about-img">
              <img
                className="img-fluid"
                src={logo_bg}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
