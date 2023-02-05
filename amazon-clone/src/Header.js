import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();  
  
  const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
  }
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
            <Link to={!user && '/login'}>
                <div className='header_option' onClick={handleAuthentication}>
                    <span className='header_optionLine1'>
                        {!user ? 'Hello Guest' : `Hello ${user.email}`}
                    </span>
                    <span className='header_optionLine2'>
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>
            

            {/* Second Button */}
            <Link to='/orders'>
                <div className='header_option'>
                    <span className='header_optionLine1'>
                        Return
                    </span>
                    <span className='header_optionLine2'>
                        & Orders
                    </span>
                </div>
            </Link>
            

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

