import React from 'react'
import './Header.css'

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
            {/* Logo */}
        </div>

        {/* Header buttons on the right */}
        <div className='header_nav'>

            {/* First Button */}
            <div className='header_navOptions_1'>
                <span className='FirstButton_line1'>
                    Hello Guest
                </span>
                <span className='FirstButton_line2'>
                    Sign In
                </span>
            </div>

            {/* Second Button */}
            <div className='header_navOptions_2'>
                <span className='FirstButton_line1'>
                    Return
                </span>
                <span className='FirstButton_line2'>
                    & Orders
                </span>
            </div>

            {/* Third Button */}
            <div className='header_navOptions_3'>
                <span className='FirstButton_line1'>
                    Prime
                </span>
                <span className='FirstButton_line2'>
                    Membership
                </span>
            </div>

        </div>


    </div>
  )
}

export default Header

