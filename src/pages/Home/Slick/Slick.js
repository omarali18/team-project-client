import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Slick = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <>
      <Slider {...settings}>
        {allProducts.map((product) => (
          <div id="trending_card" style={{ padding: "10px" }}>
            <h4 style={{ color: "orange" }}>{product.title.slice(0, 15)}</h4>
            <div id="add_to_cart">
              <button>
                <Link to="/">Add to cart</Link>
              </button>
            </div>
            <img
              width={"300px"}
              height={"400px"}
              src={product.imageUrl}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slick;
