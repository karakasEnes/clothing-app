import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route } from "react-router-dom";





function App() {

  return (
    <div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      
    </div>


    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
