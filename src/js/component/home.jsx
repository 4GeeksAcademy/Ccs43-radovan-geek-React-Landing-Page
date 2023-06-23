import React from "react";

//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */
import Navbar from "./navbar.jsx";
import Footer from "./footer";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx"

//create your first component
const Home = () => {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col p-0">
          {/* NAVBAR */}
          <Navbar />
        </div>
      </div>
      <div className="container-fluid w-75">
        <div className="row">
          <div className="col p-0">
            <div className="container mt-2">
              {/* JUMBOTRON */}
              <Jumbotron />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-between mt-1 grid gap-3">
            {/* CARDS */}
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
