import React from "react";
import "./banner.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/image1.png";
import img2 from "./images/image2.png";
import shoes from "./clothes-images/shoes.png";
import sunglass from "./clothes-images/sunglass.png";
import bag from "./clothes-images/bag.png";
import man from "./clothes-images/man.jpg";
import wallet from "./clothes-images/wallet.png";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <>
      <div id="banner">
        <br />
        <br />
        <Carousel fade id="main-banner" variant="dark">
          <Carousel.Item>
            <div id="first-img">
              <img src={img1} />

              <div id="caption">
                <p style={{ color: "orange" }}>Man Woman fashion Collection</p>
                <h2 style={{ fontWeight: "bold" }}>
                  Are you ready <p></p> for this?
                </h2>
                <p></p>
                <button>
                  <Link to="/">view this</Link>
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id="second-img">
              <div id="caption">
                <p style={{ color: "orange" }}>Man fashion Collection</p>
                <h2 style={{ fontWeight: "bold" }}>
                  Up to 50% new season for all orders
                </h2>
                <p></p>
                <button>
                  <Link to="/">view this</Link>
                </button>
              </div>
              <img src={img2} />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          paddingBottom: "70px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "orange",
            }}
          >
            What's New
          </h1>
          <h6 style={{ textTransform: "uppercase" }}>
            Listed below our new campaings promotions and offers
          </h6>
        </div>
        <br />
        <br />
        <div id="show-off">
          <div>
            <div id="shoe_bag">
              <div className="show_of_style">
                <div>
                  <h4 style={{ fontWeight: "bold" }}>
                    SSB Leather Loafers Mens{" "}
                  </h4>
                  <h6 style={{ color: "orange" }}>Shoes from THAILAND</h6>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>
                <img src={shoes} alt=" " width="150px" height="150px" />
              </div>
              <div className="show_of_style">
                <div id="btn">
                  <h4 style={{ fontWeight: "bold" }}>
                    {" "}
                    Artificial leather purse
                  </h4>
                  <h6 style={{ color: "orange" }}>wallet from Ireland</h6>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>

                <img src={wallet} alt=" " width="150px" height="150px" />
              </div>
            </div>
            <div id="shoe_bag">
              <div className="show_of_style">
                <div>
                  <h4 style={{ fontWeight: "bold" }}>
                    LouisWill Men Sunglasses
                  </h4>
                  <h6 style={{ color: "orange" }}>made by LouisWill</h6>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>
                <img src={sunglass} alt=" " width="150px" height="150px" />
              </div>
              <div className="show_of_style">
                <div>
                  <h4 style={{ fontWeight: "bold" }}>Backpack for Men MenS</h4>
                  <h6 style={{ color: "orange" }}>Most wanted Backpack</h6>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>
                <img src={bag} alt=" " width="150px" height="150px" />
              </div>
            </div>
          </div>
          <div id="show_of_main_img">
            <img src={man} width={"300px"} height="430px" alt=" " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
