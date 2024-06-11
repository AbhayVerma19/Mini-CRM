import React, { useState } from 'react';
import { createCustomer } from '../api';
import '../App.css';  // Import CSS file

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer({ name, email });
      alert('Customer created successfully');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Customer</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CustomerForm;
