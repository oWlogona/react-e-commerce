import React from "react";
import { useNavigate } from "react-router-dom";

const Total = ({ itemCount, total, history, clearCart }) => {
  const navigate = useNavigate();
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <button
          className="button is-black"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
        <button className="button is-white" onClick={() => clearCart()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Total;
