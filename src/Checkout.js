import { ImportExport, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [ {cart} , dispatch] = useStateValue();

    return (
        <div className='checkout'>

            <div className='checkout__left'>
                <img 
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg' 
                />
                <div>
                    {cart.map(item => (
                        <CheckoutProduct 
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          img={item.img}
                          rating={item.rating}
                        />  
                    ))}        
                </div>   
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
