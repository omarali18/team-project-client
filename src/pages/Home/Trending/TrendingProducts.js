import React from "react";
import "./Trending.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
// import { SRLWrapper } from 'simple-react-lightbox';

const TrendingProducts = ({ trending }) => {
  const { _id, imageUrl, title, price, intro, percent } = trending;

  const firstExample = {
    size: 30,
    value: 4,
    edit: false,
  };
  const add_to_cart = (e) => {
    const wishlist = {
      name: title,
      price: price,
      img: imageUrl,
      intro: intro,
    };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("add in cart");
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <div id="trending_card">
        <img src={imageUrl} alt={title} width={"230px"} height={"300px"} />

        <div id="trending_card_intro">
          <small>{title.slice(0, 20)}</small>
          <br />
          <ReactStars {...firstExample} />
          <p>${price}</p>
        </div>
        <div>
          <div>
            <div id="add_to_cart">
              <button onClick={add_to_cart}>
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
