import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const HomeAnimation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-left" className="animation">
      <h1>SHOP</h1>
    </div>
  );
};

export default HomeAnimation;
