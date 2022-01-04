<<<<<<< HEAD
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
=======
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeBanner/>
            <Footer/>
        </div>
    );
>>>>>>> 176719bbd52dd7e8e96fc1149b80fd9d0181be85
};

export default Home;
