import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product_info'>
            {/* product title */}
            <p> 
                Casio Watch 
            </p>
            {/* Product Price */}
            <p className='product_price'>
                <small>
                    $
                </small>
                <strong>
                    19.99
                </strong> 
            </p>
            {/* Product Rating */}
            <div className='product_rating'>
                <p>🌟</p>
            </div>    
        </div>

        <img
            src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Casio-TC500-Calculator-Watch.jpg'
            alt=''
        />

        <button>
            Add to basket
        </button>
        
    </div>
  )
}

export default Product