import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import Products from './Components/Products/Products';
import SingleItem from './Components/SingleItem/SingleItem';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:id" exact component={SingleItem} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
