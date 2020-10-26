import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    const [ {cart}, dispatch] = useStateValue();

    return (
        <div className='header'>    

            <MenuIcon className='header__burgermenu' />
            <Link to='/'>
                <img className="header__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />   
            </Link>
            <div className="header__search">
                <input className="header__searchInput"
                type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
             <div className="header__nav">

                <div className='header__option'> 
                    <span className='optionLineOne'>
                        Hello Guest,
                    </span>
                    <span className='optionLineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header__option'> 
                     <span className='optionLineThree'>
                        Returns
                    </span>
                    <span className='optionLineFour'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'> 
                     <span className='optionLineFive'>
                        Your
                    </span>
                    <span className='optionLineSix'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'> 
                        <ShoppingBasketIcon />
                        <span className=" header__optionLineTwo header__basketCount">
                            {cart?.length}
                        </span>
                    </div>
                </Link>
             </div>
        </div>
    )
}

export default Header;
