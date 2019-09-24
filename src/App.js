import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/pages/home/home'
import Index from '../src/pages/index/index'
import Cart from '../src/pages/cart/cart'
import Nav from '../src/components/nav.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route path="/index/" component={Index} />
        <Route path="/cart/" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
