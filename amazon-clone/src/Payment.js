import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';


function Payment() {

    const navigate = useNavigate();

  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {

    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            //stripe expects the total in a currencies subunits (if dollars it should be in cents) so we do *100
            url: `/payments/create?total=${getBasketTotal(basket)*100}`
        }); //axios is a way to make POST or GET requests
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket]) //   for every change in basket a new charge (secret) has to be generated

  const handleSubmit = async e => {
    // stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    
    }).then(({ paymentIntent}) => {
        //paymentIntent is the payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate('/orders', { replace: true })
    })
  }

  const handleChange = e => {
    // listen for changes in cardelement
    // display any errors as the customer types in the card details 

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");

  }


  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout(
                    <Link to='/checkout'>
                        {basket?.length} items
                    </Link>
                )
            </h1>

            
            {/* //delivery address */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 lane</p>
                    <p>LA, CA</p>
                </div>
            </div>

            {/* //items */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>
                        Review items and delivery
                    </h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating} 
                        />
                    ))}
                </div>
            </div>

            {/* //payments method */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    {/* Stripe magic for payments */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment_priceContainer'>
                            <CurrencyFormat 
                                renderText = {(value) => (
                                    <h3> Order Total: {value}</h3> 
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType = {"text"}
                                thousandSeparator = {true}
                                prefix = {"$"}
                            /> 
                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                   {processing ? <p>Processing Payment</p> : "Buy Now"} 
                                </span>
                            </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Payment