import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/pages/home/home'
import Index from '../src/pages/index/index'
import Cart from '../src/pages/cart/cart'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/index/" component={Index} />
        <Route path="/cart/" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
