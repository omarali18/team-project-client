import React from 'react';
import './banner.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/image1.png'
import img2 from './images/image2.png'
import shoes from './clothes-images/shoes.png'
import sunglass from './clothes-images/sunglass.png'
import bag from './clothes-images/bag.png'
import man from './clothes-images/man.jpg'
import wallet from './clothes-images/wallet.png'
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
        <br/><br/><br/><br/>
      <div>
        <div style={{textAlign:'center'}}>
        <h2 style={{textTransform:'uppercase', fontWeight:'bold', color:'orange'}}>What's New</h2>
        <h5>Listed below our new campaings promotions and offers</h5>
        </div><br/><br/>
        <div id='show-off'>
          <div>
          <div id='shoe_bag'>
            <div className="show_of_style">
            <div>
                  <h4>This is just for testing</h4>
                  <h6>this for testing</h6>
                  <button>
                        <Link to="/">view this</Link>
                    </button>
                </div>
                <img 
                src={shoes} 
                alt=" "
               width='150px'
                height='150px'
                />
            </div>
            <div className="show_of_style">
            <div>
                  <h4>This is just for testing</h4>
                  <h6>this for testing</h6>
                  <button>
                        <Link to="/">view this</Link>
                    </button>
                </div>
            <img 
                src={wallet} 
                alt=" "
               width='150px'
                height='150px'
                />
            </div>
          </div>
          <div id='shoe_bag'>
            <div className="show_of_style">
            <div>
                  <h4>This is just for testing</h4>
                  <h6>this for testing</h6>
                  <button>
                        <Link to="/">view this</Link>
                    </button>
                </div>
              <img 
                src={sunglass} 
                alt=" "
               width='150px'
                height='150px'
                />
            </div>
            <div className="show_of_style">
                <div>
                  <h4>This is just for testing</h4>
                  <h6>this for testing</h6>
                  <button>
                        <Link to="/">view this</Link>
                    </button>
                </div>
            <img 
                src={bag} 
                alt=" "
               width='150px'
                height='150px'
                />
            </div>
          </div>
          </div>
          <div id="show_of_main_img">
            <img 
                
                src={man} 
                width={'300px'}
                height="430px"
                alt=" "
                />
          </div>
        </div>
      </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
};

export default HomeBanner;