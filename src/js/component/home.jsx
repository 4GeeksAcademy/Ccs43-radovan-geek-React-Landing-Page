import React from "react";

//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */
import Navbar from "./navbar.jsx";
import Footer from "./footer";
import Card from "./card.jsx";

//create your first component
const Home = () => {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col">
          {/* NAVBAR */}
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">{/* JUMBOTRON */}</div>
        </div>
      </div>
      {/* CARDS */}
      <div className="row">
        <div className="col d-flex justify-content-between mt-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
