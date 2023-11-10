import React from "react";
import { Link } from "react-router-dom";
import Pushhead from "../../assets/images/2023-10-23-Pushead-Sale-Store-Banner.webp";
import drop from "../../assets/images/Drop-Store-Banner.webp";
import Scavenger from '../../assets/images/Scavenger-Sale-Newsletter-Banner-2.webp';
const Merch = () => {
  return (
    <>
      <section className="merch">
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="left">
                <Link to="#">
                  <img src={Pushhead} alt="Pushhead" />
                </Link>
              </div>
              <div className="right">
                <Link to="#">
                  <img src={drop} alt="DropShop" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-link">
        <div className="container">
          <div className="row">
            <h2>SHOP THE FULL VINYL CATALOG & SAVE!</h2>
            <Link to='#'>SHOP NOW</Link>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
            <div className="row">
                <div className="heading">
                    <h2>STORE NEWS</h2>
                </div>
                <div className="top">
                    <div className="image">
                        <img src={Scavenger} alt="Scavenger" />
                    </div>
                    <div className="info">
                      <p>NOVEMBER 1, 2023</p>
                      <h3>HOLIDAY SCAVENGER HUNT</h3>
                     <Link to='#'>READ MORE</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Merch;
