import React from 'react';
import './banner.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/image1.png'
import img2 from './images/image2.png'
import shoes from './clothes-images/shoes.jpg'
import sunglass from './clothes-images/sunglass.webp'
import gym from './clothes-images/gym1.jpeg'
import wallet from './clothes-images/wallet.jpg'
import { Link } from 'react-router-dom';



const HomeBanner = () => {
    return (
        <>
        <div id='banner'><br/><br/>
                    <Carousel fade id="main-banner" variant="dark">
            <Carousel.Item>
              <div id='first-img'>
               <img
                src={img1}
                width="500px"
                height="400px"
                />
                <div id="caption">
                    <p style={{color:'orange'}}>
                       Man Woman fashion Collection
                    </p>
                    <h2 style={{fontWeight:'bold'}}>
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
                    <p style={{color:'orange'}}>
                       Man  fashion Collection
                    </p>
                    <h2 style={{fontWeight:'bold'}}>
                        Up to 50% new season for all orders
                    </h2>
                    <p></p>
                    <button>
                        <Link to="/">view this</Link>
                    </button>
                </div>
              <img
                src={img2}
                width="500px"
                height="400px"
                />
              </div>

            </Carousel.Item>
            </Carousel>  
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div>
          <div>
          <div id='shoe&bag'>
            <div>
                <img src={shoes} alt=" "/>
            </div>
            <div>
                <img src={wallet} alt=" "/>
            </div>
          </div>
          <div id='shoe&bag'>
            <div>
                <img src={sunglass} alt=" "/>
            </div>
            <div>
                {/* <img src={ } alt=" "/> */}
            </div>
          </div>
          </div>
          <div>
                <img src={gym} alt=" "/>
          </div>
        </div>
        </>
    );
};

export default HomeBanner;