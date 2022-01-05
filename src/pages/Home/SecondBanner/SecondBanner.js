import React from "react";
import "./SecondBanner.css";
import ReactStars from "react-rating-stars-component";

import second_banner_img from "./images/second_banner_img.jpg";

const SecondBanner = () => {
  const firstExample = {
    size: 30,
    value: 4,
    edit: false,
  };

  return (
    <>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          paddingBottom: "70px",
        }}
      >
        <div id="second_banner">
          <img src={second_banner_img} alt=" " />
          <div id="second_banner_intro">
            <h4>Light Blue Cotton Casual Shirt for Men</h4>
            <ReactStars {...firstExample} />
            <p>$2400</p>
            <p>
              This casual shirt is perfect for the young and smart person which
              can be worn for any occasion, office, classes or with friends.
              Made from Cotton which gives it a distinct identity. Soft material
              fabrics are used for making the casual shirt as it is supposed to
              be a comfortable
              <br />
              <br /> loose fitting dress. Rock the attire with contrasting
              chinos to complete the look. And be the best version of yourself.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondBanner;
