import React from 'react'
import './SubHeader.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function SubHeader() {
    return (
        <div className='subheader'>

            <div className='subheader__greet'>
                <LocationOnIcon className='subheader__locIcon' />
                <div className='subheader__greettext'>
                    <p className='subheader__deliver'>
                        Deliver to User
                    </p>
                    <h1 className='subheader__address'>
                       <strong>Utica 13501</strong> 
                    </h1>
                </div>
            </div>

            <div className='subheader__headings'>
                <p className='heading'>Holiday Deals</p>
                <p className='heading'>Gift Cards</p>
                <p className='heading'>Best Sellers</p>
                <p className='heading'>New Releases</p>
                <p className='heading'>Customer Service</p>
                <p className='heading'>Coupons</p>
                <p className='heading'>Browsing History </p>
                <ArrowDropDownIcon className='subheader__arrowdropdown' />
                <p className='heading'>Prime Video</p>
                <p className='heading'>Ryan's Amazon.com</p>
                <p className='heading'>Buy Again</p>
                <p className='heading'>Whole Foods</p>
                <p className='heading'>Pantry</p>
                <p className='heading'>Sell</p>
                <p className='heading'>Registry</p>
                <p className='heading'>AmazonBasics</p>
            </div>

            <h1 className='subheader__endingtext'>
                Shop deals before they're gone
            </h1>
        </div>
    )
}

export default SubHeader
