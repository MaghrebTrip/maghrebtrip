import "./Footer.css"

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <p className="m-0 text-white small">
              &copy; 2024 MaghrebTrip. All Rights Reserved.
            </p>
          </div>
          <div className="col-auto">
            <a className="link-light small" href="#!">
              Privacy
            </a>
            <span className="text-white mx-1">·</span>
            <a className="link-light small" href="#!">
              Terms
            </a>
            <span className="text-white mx-1">·</span>
            <a className="link-light small" href="#!">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer