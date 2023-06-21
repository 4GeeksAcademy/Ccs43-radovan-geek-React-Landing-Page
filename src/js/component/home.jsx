import React from "react";

/* import Navbar from "./navbar"; */

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Navbar />
    </div>
  );
};

export default Home;
