import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid navbar w-75 p-2">
        <a className="navbar-brand text-end" style={{ color: 'white' }} href="#">START BOOTSTRAP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="#">Home</a>
            <a className="nav-link" style={{ color: 'white' }} href="#">About</a>
            <a className="nav-link" style={{ color: 'white' }} href="#">Service</a>
            <a className="nav-link" style={{ color: 'white' }} href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>)
};




export default Navbar;
