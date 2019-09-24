import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../src/pages/home/home';
import Index from '../src/pages/index/index';
import Cart from '../src/pages/cart/cart';
import Show from '../src/pages/show/show';
import Glaze from '../src/pages/glaze/glaze';
import Nav from '../src/components/nav.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route exact path="/order/" component={Index} />
        <Route exact path="/order/:type" component={Show} />
        <Route path="/order/:type/:glaze" component={Glaze} />
        <Route path="/cart/" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
