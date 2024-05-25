import "./Contact.css";
import logo_bg from "../../assets/img/maghrebtrip_logo_bg.png"

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="contact-text p-5">
              <h2 className="display-4">Contact Us</h2>
              <p>
                For any inquiries, suggestions, or feedback, please don't
                hesitate to contact us. We're here to help!
              </p>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
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
                <div className="form-group mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="contact-img">
              <img
                className="img-fluid"
                src={logo_bg}
                alt="Contact Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
