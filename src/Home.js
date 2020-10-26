import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ODA5YTE0OTEt/ODA5YTE0OTEt-Y2M1OTcwOWEt-w3000._CB419288260_.jpg"
                    alt='HomeBackground' >
                </img>
            </div>

            <div className="home__row">
                {/* Product */}
                < Product id='1234567'
                          title='Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control -Silver'
                          img={'https://m.media-amazon.com/images/I/71+iQZU-dVL._AC_SY400_.jpg'}
                          price={279.99}
                          rating={5}/>
                < Product id="8392001"
                          title='NBA 2K21 - PlayStation 4'
                          img={'https://m.media-amazon.com/images/I/71dMcqvTh8L._AC_SY400_.jpg'}
                          price={59.99}
                          rating={3}/>
            </div>

            <div className="home__row">
                < Product id='12345612'
                          title='RAW Cones Classic Lean Size | 100 Pack | Natural Pre Rolled Rolling Paper with Tips & Packing Sticks Included'
                          img={'https://images-na.ssl-images-amazon.com/images/I/716dC3-fujL._AC_SX679_.jpg'}
                          price={26.99}
                          rating={5}/>
                < Product id='12372922'
                          title='
                          Kicking Horse Coffee, Decaf, Swiss Water Process, Dark Roast, Whole Bean, 10 oz - Certified Organic, Fairtrade, Kosher Coffee'
                          img={'https://m.media-amazon.com/images/I/71aTfzMmSkL._AC_SY400_.jpg'}
                          price={11.86}
                          rating={5}/>
                < Product id='192729232'
                          title='Blue Yeti USB Mic for Recording & Streaming on PC and Mac, 3 Condenser Capsules, 4 Pickup Patterns, Headphone Output'
                          img={'https://m.media-amazon.com/images/I/61Ly9zgVyIL._AC_SY400_.jpg'}
                          price={139.99}
                          rating={4}/>
                < Product id='9282939'
                          title='Jade Leaf Organic Ceremonial Grade Matcha Green Tea Powder - Authentic Japanese Origin - Premium 1st Harvest (30g)'
                          img={'https://m.media-amazon.com/images/I/71mJQFfrGoL._AC_SY400_.jpg'}
                          price={29.99}
                          rating={3}/>
            </div>

            <div className="home__row">
                < Product id='11111111'
                            title='Apple Aid Pods Pro'
                            img={'https://m.media-amazon.com/images/I/71eGsUPZm2L._AC_SY400_.jpg'}
                            price={219.99}
                            rating={4}/>
                < Product id='12372922'
                            title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray"
                            img={'https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg'}
                            price={2449.00}
                            rating={4}/>
                < Product id='12372922'
                            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                            img={'https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg'}
                            price={899.99}
                            rating={4}/>
            </div>

        </div>
    )
}

export default Home
