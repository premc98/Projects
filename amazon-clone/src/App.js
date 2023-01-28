import './App.css';
import React from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login';


function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route exact path="/" element={[<Header />, <Home />]} />
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
