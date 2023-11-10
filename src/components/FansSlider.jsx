import React from "react";

import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import No from "../assets/images/badge-exclusion_small.png";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const FansSlider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="slider-slide">
        {" "}
        <div className="product-card">
          <div className="img-box">
            <img
              src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
              alt={data.name}
            />
          </div>
          <div className="product-info">
            <div className="span">
              <img src={No} alt="No" /> <p>NEW - NO DISCOUNTS</p>
            </div>
            <Link to={`/details/${data.id}`}>{data.name}</Link>
            <p>${data.price}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-card">
          <div className="img-box">
            <img
              src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
              alt={data.name}
            />
          </div>
          <div className="product-info">
            <div className="span">
              <img src={No} alt="No" /> <p>NEW - NO DISCOUNTS</p>
            </div>
            <Link to={`/details/${data.id}`}>{data.name}</Link>
            <p>${data.price}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default FansSlider;
