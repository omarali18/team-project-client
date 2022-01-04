import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const DisplayProduct = ({product}) => {
    const {_id, imageUrl, title, price, intro, percent} = product

    const firstExample = {
        size: 30,
        value: 4,
        edit: false
      };
    return (
        <>
           <div id='trending_card'>
           <img 
           src={imageUrl} alt={title} 
           width={'230px'} 
           height={'300px'}/>

           <div id='trending_card_intro'>
            <small>{title.slice(0,20)}</small><br/>
            <ReactStars {...firstExample} />
            <p>${price}</p>
           </div>
           <div>
               <div>
                   <div id='add_to_cart'>
                       <button>
                           <Link to="/">Add to cart</Link>
                       </button>
                   </div>
                   <div>

                   </div>
                   <div>

                   </div>
               </div>
           </div>
           </div>
        </>
    );
};

export default DisplayProduct;