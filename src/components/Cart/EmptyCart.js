import React, { Component } from "react";

class EmptyCart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-1=auto text-center text-title">
            <h1>Your cart is empty</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
