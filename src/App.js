import React from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/" component={ProductList}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
