import React from "react";

const Navbar = () => {
  <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">START BOOTSTRAP</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarNav">
      <ul classname="navbar-nav">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">About</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Service</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link"href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav></div>;
};

export default Navbar;
