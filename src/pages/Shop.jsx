import React, { useContext } from "react";
import Seasons from "../assets/sass/components/bg/72-seasons_dark-banner.jpg";
import Sale from "../assets/sass/components/bg/2023-10-09-You-Play-Sale-Home-Banner-2.jpg";
import New from "../assets/sass/components/bg/2023-08-21-72-Seasons-Drop-No-Text-Banner.jpg";
import Banner from "../assets/sass/components/bg/store-main_banner.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import FansSlider from "../components/FansSlider";
import { Context } from "../utils/MainContext";
import Merch from "../components/sections/Merch";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    await axios.get("http://localhost:5000/metallica/products").then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <section className="shop-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
         
        >
          <SwiperSlide>
            {" "}
            <div className="slider">
              <div className="bg">
                <img src={Seasons} alt="72 seasons" />
              </div>
              <div className="details">
                <h2>72 SEASONS</h2>
                <p>GET THE NEW ALBUM NOW</p>
                <Link to="/">SHOP</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slider">
              <div className="bg">
                <Link to="/">
                  <img src={Sale} alt="Sale" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="bg">
                <img src={New} alt="72 seasons" />
              </div>
              <div className="details">
                <h2>NEW 72 SEASONS MERCH DROP</h2>
                <p>SHIRTS AND ACCESORIES</p>
                <Link to="/">SHOP</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="bg">
                <img src={Banner} alt="72 seasons" />
              </div>
              <div className="details">
                <h2>SHOP MERCH</h2>

                <Link to="/">SHOP</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="shop-section black">
        <div className="container">
          <div className="row">
            <h2>{data.length} items</h2>

            <div className="products">
              {data.slice(10, 16).map((item) => (
                <Product data={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Merch />
    </>
  );
};

export default Shop;
