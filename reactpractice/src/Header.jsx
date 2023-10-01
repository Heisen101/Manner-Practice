import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./assets/header5.webp";
import Image2 from "./assets/header4.webp";

const Header = () => {
  const firstImage = {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
  };

  const secondImage = {
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
  };

  return (
    <div className="container-fluid row header-custom">
      <div className="col-6" style={firstImage}></div>
      <div className="col-6" style={secondImage}></div>
      <div className="carusel">
        <div className="carusel_section">
          <h2>CRAFTED BY KINGS, WORN</h2>
          <h2>BY GENTLEMEN</h2>
          <Link to="/product-detail">
            <button className="btn btn-light">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
