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
          <Route path='/payment' element={[<Header />, <Payment />]} />
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route exact path="/" element={[<Header />, <Home />]} />
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
