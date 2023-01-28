import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();  
  return (
    <div className='header'>

        {/* Left Logo */}
        <Link to="/">
            <img 
                className='header_logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt=""
            />
        </Link>
        

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
            <Link to='login'>
                <div className='header_option'>
                    <span className='header_optionLine1'>
                        Hello Guest
                    </span>
                    <span className='header_optionLine2'>
                        Sign In
                    </span>
                </div>
            </Link>
            

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
            <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingCartIcon
                        className='header_optionBasketIcon'
                    />
                    <span className='header_optionLine2 header_basketCount'>
                    {basket?.length}
                    </span>
                </div>
            </Link>
            

        </div>


    </div>
  )
}

export default Header

