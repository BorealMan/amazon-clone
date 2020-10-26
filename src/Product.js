import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product( {id, title, img, price, rating} ) {

    // Cart Object
    const [ {cart} , dispatch] = useStateValue();

    const addToCart = () => {
        //dispatch the item into data layer
        dispatch ({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>

            <div className="product__info" >
                    <p> {title} </p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong> {price} </strong>
                    </p>
                    <div className='product__rating'>
                        {Array(rating).fill().map((_, i) => (
                              <p>⭐</p>
                        ))}
                    </div>
            </div>

                <img className='product__img' 
                src={img}>
                </img>

                <button onClick={addToCart}>Add To Cart </button>

        </div>
    )
}

export default Product;
