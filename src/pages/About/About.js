import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div id="cart">
        <div>
          <h5>
            <Link to="/">Home</Link>/About
          </h5>
          <h1>About Us</h1>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div id="about_intro">
        <div>
          <img
            src="https://showwp.com/demos/shopist/upload/parallax_02.jpg"
            alt="abotu-img"
            width={"40%"}
          />
          <div id="about_desc">
            <h3
              style={{
                textTransform: "uppercase",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Welcome To Shopist
            </h3>
            <h6 style={{ fontWeight: "bold" }}>
              Saiakt Somir || Omar Ali, Bangladesh
            </h6>
            <br />
            <p style={{ fontWeight: "bold" }}>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap.. <br />
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took at and at..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
