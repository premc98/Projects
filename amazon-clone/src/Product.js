import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image,  price, rating}) {
    
    const [{ basket }, dispatch] = useStateValue();

    console.log('this is basket', basket)

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

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

        <button onClick={addToBasket}>
            Add to basket
        </button>
        
    </div>
  )
}

export default Product