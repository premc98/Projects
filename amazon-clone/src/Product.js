import React from 'react'
import './Product.css'

function Product({title, image,  price, rating}) {
  return (
    <div className='product'>
        <div className='product_info'>
            {/* product title */}
            <p>
                {title}
            </p>
            {/* Product Price */}
            <p className='product_price'>
                <small>
                    $
                </small>
                <strong>
                    {price}
                </strong> 
            </p>
            {/* Product Rating */}
            <div className='product_rating'>
                {Array(rating).fill().map((_, i)=>(<p>🌟</p>))}     
            </div>    
        </div>

        <img
            src={image}
            alt=''
        />

        <button>
            Add to basket
        </button>
        
    </div>
  )
}

export default Product