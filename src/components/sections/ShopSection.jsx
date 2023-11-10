import React, { useState } from "react";
import Product from "../Product";
import { useEffect } from "react";
import axios from "axios";
import HomeAnimation from "../animation/HomeAnimation";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ShopSection = () => {
  const navigate = useNavigate;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    setLoading(true);
    await axios
      .get(process.env.REACT_APP_ALL_PRODUCTS)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        navigate("/error");
      });
  };

  return (
    <section className="shop-section">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <h2>{data.length} items</h2>
          <HomeAnimation />
          <div className="products">
            {data.map((item) => (
              <Product data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
