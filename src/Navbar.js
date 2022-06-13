function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand navtext" href="#">
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link navtext" aria-current="page" href="#">
                About
              </a>
              <a className="nav-link navtext" href="#">
                Works
              </a>
              <a className="nav-link navtext" href="#">
                Something
              </a>
              <a className="nav-link navtext text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar;