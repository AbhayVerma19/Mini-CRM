import React, { useState } from 'react';
import { createOrder } from '../api';
import '../App.css';  // Import CSS file

const OrderForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrder(customerId, { amount });
      alert('Order created successfully');
      setCustomerId('');
      setAmount('');
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Order</h2>
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
