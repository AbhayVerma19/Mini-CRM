import React, { useState } from "react";
import "./order.css";
import axios from "axios";

const OrderForm = () => {
  const [customerId, setCustomerId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bodyjson = {
        amount: amount,
      };
      console.log(bodyjson);
      await axios
        .post(`http://localhost:5000/api/order/${customerId}`, bodyjson)
        .then((res) => {
          console.log(res.data);
          alert("Order created successfully");
        });
      setCustomerId("");
      setAmount("");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="OrderForm">
      <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <h2 className="OrderForm__heading w-2/5  bg-blue-500 rounded-md text-center p-2 text-white font-bold text-xl mb-3">Create Order</h2>
        </div>
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="OrderForm__input"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="OrderForm__input"
        />
        <button type="submit" className="OrderForm__button">
          Create Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
