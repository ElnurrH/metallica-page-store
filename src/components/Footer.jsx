import React from "react";
import { Link } from "react-router-dom";
import Metallica from "../assets/sass/components/bg/logo-homepage.svg";
import Member from "../assets/sass/components/bg/fifth-member-logoo.svg";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import Blackened from "../assets/images/blackened-whiskey-logo.svg";
import Record from "../assets/images/blackened-recordings-logo.svg";
import Foundation from "../assets/images/foundation-logo.svg";
import Blackbox from "../assets/images/metallica-black-box-logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="box">
              <div className="content-box">
                <span className="detail">1,409,182 STRONG AND COUNTING.</span>
                <h3>WE WANT YOU TO BE THE FIFTH MEMBER</h3>
                <Link to="/login">JOIN US TODAY</Link>
              </div>
              <div className="bg-box"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="container">
          <div className="row-bg">
            <div className="logo-image">
              <img src={Metallica} alt="Logo" />
            </div>
            <ul className="top-footer-nav">
              <li className="link-box left-box">
                <Link to="/shop">
                  <div className="footer-box">
                    <div className="img-box">
                      <img src={Member} alt="Fifth member fan club" />
                    </div>

                    <span>Fifth Member Fan Club</span>
                  </div>
                </Link>
              </li>
              <li className="link-box">
                <Link to="/shop">
                  <div className="footer-box">
                    <div className="img-box">
                      <img src={Blackened} alt="Fifth member fan club" />
                    </div>

                    <span>Blackened Whiskey </span>
                  </div>
                </Link>
              </li>
              <li className="link-box">
                <Link to="/shop">
                  <div className="footer-box">
                    <div className="img-box">
                      <img src={Record} alt="Fifth member fan club" />
                    </div>
                    <span>Blackened Recordings</span>
                  </div>
                </Link>
              </li>
              <li className="link-box">
                <Link to="/shop">
                  <div className="footer-box">
                    <div className="img-box">
                      <img src={Foundation} alt="Fifth member fan club" />
                    </div>
                    <span>All Within My Hands </span>
                  </div>
                </Link>
              </li>
              <li className="link-box">
                <Link to="/shop">
                  <div className="footer-box">
                    <div className="img-box">
                      <img src={Blackbox} alt="Fifth member fan club" />
                    </div>
                    <span>The Metallica Black Box</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="footer-content">
              <ul className="footer-support">
                <li>
                  <Link to="/shop">HELP</Link>
                </li>
                <li>
                  <Link to="/shop">RETURNS</Link>
                </li>
                <li>
                  <Link to="/shop">CREDITS</Link>
                </li>
                <li>
                  <Link to="/shop">TERMS OF USE</Link>
                </li>
                <li>
                  <Link to="/shop">PRIVACY POLICY</Link>
                </li>
                <li>
                  <span>© METALLICA</span>
                </li>
                <li>
                  <span>© BLACKENED RECORDINGS</span>
                </li>
                <li>
                  <span>THE METALLICA CLUB ®</span>
                </li>
              </ul>
              <ul className="footer-contact">
                <li>
                  <Link to="#">
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <BsYoutube />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <SiTiktok />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaThreads />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaHeadphones />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
