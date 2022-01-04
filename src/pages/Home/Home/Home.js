import React from "react";
import FashionQuotes from "../FashionQuotes/FashionQuotes";
import HomeBanner from "../HomeBanner/HomeBanner";
import NewProducts from "../NewProducts/NewProducts";
import SecondBanner from "../SecondBanner/SecondBanner";
import Slick from "../Slick/Slick";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Trending />
      <SecondBanner />
      <NewProducts />
      <FashionQuotes />
      <Slick />
    </div>
  );
};

export default Home;
