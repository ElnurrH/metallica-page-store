import React from "react";
import { Link } from "react-router-dom";



const Shop = () => {
  return (
    <div className="shop-banner">
      <div className="overlay"></div>
      <div className="container">
        <div className="banner-row">
          <ul className="link-list">
            <li className="link heading">
              <Link to="/shop">NEW & FEATURED</Link>
            </li>
            <li className="link">
              <Link to="/shop">Collaborations</Link>
            </li>
            <li className="link">
              <Link to="/shop">Sale</Link>
            </li>
            <li className="link">
              <Link to="/shop">Clearance</Link>
            </li>
            <li className="link">
              <Link to="/shop">Gift Certificates</Link>
            </li>
          </ul>

          <ul className="link-list">
            <li className="link heading">
              <Link to="/shop">MEDIA</Link>
            </li>
            <li className="link">
              <Link to="/shop">Reissues</Link>
            </li>
            <li className="link">
              <Link to="/shop">Vinyl</Link>
            </li>
            <li className="link">
              <Link to="/shop">Digital Downloads</Link>
            </li>
            <li className="link">
              <Link to="/shop">Live Metallica Cds</Link>
            </li>
            <li className="link">
              <Link to="/shop">CDs</Link>
            </li>
            <li className="link">
              <Link to="/shop">DVDs</Link>
            </li>
            <li className="link">
              <Link to="/shop">Books</Link>
            </li>
          </ul>

          <ul className="link-list">
            <li className="link heading">
              <Link to="/shop">APPAREL</Link>
            </li>
            <li className="link">
              <Link to="/shop">Shirts</Link>
            </li>
            <li className="link">
              <Link to="/shop">Pants & Shorts</Link>
            </li>
            <li className="link">
              <Link to="/shop">Outerwear</Link>
            </li>
            <li className="link">
              <Link to="/shop">Footwear</Link>
            </li>
            <li className="link">
              <Link to="/shop">Kids & Babies</Link>
            </li>
          </ul>

          <ul className="link-list">
            <li className="link heading">
              <Link to="/shop">ACCESSORIES</Link>
            </li>
            <li className="link">
              <Link to="/shop">Stickers, Patches & Buttons</Link>
            </li>
            <li className="link">
              <Link to="/shop">Puzzles, Games & Figures</Link>
            </li>
            <li className="link">
              <Link to="/shop">Wall Art</Link>
            </li>
            <li className="link">
              <Link to="/shop">Picks, Sticks & Straps</Link>
            </li>
            <li className="link">
              <Link to="/shop">Vinyl Care</Link>
            </li>
            <li className="link">
              <Link to="/shop">Jewelry</Link>
            </li>
            <li className="link">
              <Link to="/shop">Drinkware</Link>
            </li>
          </ul>

          <ul className="link-list">
            <li className="link heading">
              <Link to="/shop">COLLECTIONS</Link>
            </li>
            <li className="link">
              <Link to="/shop">All Within My Hands</Link>
            </li>
            <li className="link">
              <Link to="/shop">Fifth Member™</Link>
            </li>
            <li className="link">
              <Link to="/shop">Blackened Whiskey</Link>
            </li>

            <li className="link special top-mg">
              <Link to="/shop">PROBITY UK SHOP</Link>
            </li>
            <li className="link special">
              <Link to="/shop">METALLICA BLACK BOX</Link>
            </li>
          </ul>
          <div className="banner">
            <div className="top">
              <Link  to="/shop">
              <div className="bg-top">SHOP ALL</div>
              </Link>
            </div>
            <div className="bottom">
              <Link to="/shop">
                <div className="bg-bottom"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
