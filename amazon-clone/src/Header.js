import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>

        {/* Left Logo */}
        <img 
            className='header_logo'
            src='https://capebretonspectator.com/wp-content/uploads/2018/01/Amazon-Logo.jpg' 
        />

        {/* Search Bar */}
        <div className='header_search'>
            <input 
                className='header_searchInput' 
                type='text'
            />
            <SearchIcon 
                className='header_searchIcon'
            />
            {/* Logo */}
        </div>

        {/* Header buttons on the right */}
        <div className='header_nav'>

            {/* First Button */}
            <div className='header_option'>
                <span className='header_optionLine1'>
                    Hello Guest
                </span>
                <span className='header_optionLine2'>
                    Sign In
                </span>
            </div>

            {/* Second Button */}
            <div className='header_option'>
                <span className='header_optionLine1'>
                    Return
                </span>
                <span className='header_optionLine2'>
                    & Orders
                </span>
            </div>

            {/* Third Button */}
            <div className='header_option'>
                <span className='header_optionLine1'>
                    Prime
                </span>
                <span className='header_optionLine2'>
                    Membership
                </span>
            </div>

            {/* Basket */}
            <div className='header_optionBasket'>
                <ShoppingCartIcon
                    className='header_optionBasketIcon'
                />
                <span className='header_optionLine2 header_basketCount'>
                    0
                </span>
            </div>

        </div>


    </div>
  )
}

export default Header

