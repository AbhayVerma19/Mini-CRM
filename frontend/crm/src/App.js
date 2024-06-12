import React, { useState } from "react";
import CustomerForm from "./components/Customer/CustomerForm";
import OrderForm from './components/Order/OrderForm';
import AudienceForm from "./components/Audience/AudienceForm";
import Navbar from "./components/Navbar/Navbar";
import CampaignList from './components/Campaigns/CampaignList';
import AudienceList from "./components/Audience/AudienceList";
import Home from './components/Home/Home'
import "./App.css"; // Import CSS file

import { Route, Routes, Switch } from "react-router-dom";

const App = () => {
  //   const [audience, setAudience] = useState([]);
  //   const [campaignMessage, setCampaignMessage] = useState('');

  //   const handleSendCampaign = async () => {
  //     try {
  //       const size = audience.length;
  //       await sendCampaign({ audience, size, message: campaignMessage });
  //       alert('Campaign sent successfully');
  //     } catch (error) {
  //       console.error('Error sending campaign:', error);
  //     }
  //   };

  return (
    <div className="app">
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/audience" element={<AudienceForm />}></Route>
        <Route path="/customer" element={<CustomerForm />}></Route>
        <Route path="/order" element={<OrderForm />}></Route>
        <Route path="/campaign" element={<CampaignList />}></Route>
        <Route path="/audienceList" element={<AudienceList />}></Route>
      </Routes>
    </div>
  );
};

export default App;
