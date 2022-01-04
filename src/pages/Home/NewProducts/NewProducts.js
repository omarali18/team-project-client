import React, { useEffect, useState } from 'react';
import DisplayProduct from './DisplayProduct';

const NewProducts = () => {
    const [products, setProducts] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data.slice(10, 25)))
   },[])
    return (
        <>
            <div style={{  backgroundColor: '#9fa3a221', padding:'50px 0px'}}>
            <div id="trending_intro">
                    <h1>New Products</h1>
                    <h6>You likely have anything to wear at any rate! Feel alive! So if you’re looking for best items!</h6>
                </div>
                <div id='trending_map'>
                    {
                        products.map(product => <DisplayProduct 
                        key={product.key}
                        product={product}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default NewProducts;