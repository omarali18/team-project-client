import React, { useEffect, useState } from 'react';
import './Trending.css'
import TrendingProducts from './TrendingProducts';


const Trending = () => {
    const [trendings, setTrending] = useState([])
    
    useEffect(() => {
       fetch('http://localhost:5000/trending')
       .then(res => res.json())
       .then(data => setTrending(data))
    }, [])


    return (
        <>

            <div id="trending">
                <div id="trending_intro">
                    <h1>Trending Items</h1>
                    <h6>You likely have anything to wear at any rate! Feel alive! So if you’re looking for best items!</h6>
                </div>
                  
                <div id='trending_map'>
                {
                trendings.map(trending =>             
                 <TrendingProducts
                    key={trending.key}
                    trending={trending}
                />
                )
            }
                </div>
            </div>
            

        </>
    );
};

export default Trending;