import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe("pk_test_51MWjttFxrILRHLpEv653hV5lmfe4hNUfCshTuelPSc2Uj1RIA4TfwfLJC0GsticrpS775i2Hte5Jcw6b9yZNMr9E00evlIgAGx");

function App() {

  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    //building a listener that will only run once when the app component loads

    auth.
      onAuthStateChanged(authUser => {
        console.log('The user is ', authUser);

        if (authUser) {
          //the user just logged in/ user was logged in 
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          //the user is logged out 
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/orders' element={[<Header />, <Orders />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements> ]} />
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route exact path="/" element={[<Header />, <Home />]} />
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
