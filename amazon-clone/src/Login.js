import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <Link to='/'>
            <img
                className='login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt='' 
            />
        </Link> 

        <div className='login_container'>
            <h1>
                Sign in
            </h1>

            <form>
                <h5>   
                    Email
                </h5>
                <input type='text' />

                <h5>
                    Password
                </h5>
                <input type='password' />

                <button className='login_SignInButton'>
                    Sign In
                </button>

            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login_createAccountButton'>
                Create an Account
            </button>


            

        </div>
    </div>
  )
}

export default Login