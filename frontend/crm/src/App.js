import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';
import AudienceForm from './components/AudienceForm';
import CampaignList from './components/CampaignList';
import { sendCampaign } from './api';
import './App.css';  // Import CSS file

const App = () => {
  const [audience, setAudience] = useState([]);
  const [campaignMessage, setCampaignMessage] = useState('');

  const handleSendCampaign = async () => {
    try {
      const size = audience.length;
      await sendCampaign({ audience, size, message: campaignMessage });
      alert('Campaign sent successfully');
    } catch (error) {
      console.error('Error sending campaign:', error);
    }
  };

  return (
    <div className="app">
      <CustomerForm />
      <OrderForm />
      <AudienceForm setAudience={setAudience} />
      <div className="send-campaign">
        <h2>Send Campaign</h2>
        <textarea
          placeholder="Campaign Message"
          value={campaignMessage}
          onChange={(e) => setCampaignMessage(e.target.value)}
        />
        <button onClick={handleSendCampaign}>Send Campaign</button>
      </div>
      <CampaignList />
    </div>
  );
};

export default App;
