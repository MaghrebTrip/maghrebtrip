import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-filter" />
      <div className="container">
        <div className="hero-content text-center">
          <h2 className="display-4">Welcome to MaghrebTrip</h2>
          <p>The only virtual guide you will need when traveling to Morocco.</p>
          <Link to="/download" className="btn">
            Start a trip now!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
