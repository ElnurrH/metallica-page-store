import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <Link to="/shop">
        <div className="hero-bg"></div>
      </Link>
      <div className="triangle-top"></div>
      <div className="triangle-bottom"></div>

      
    </section>
  );
};

export default Hero;
