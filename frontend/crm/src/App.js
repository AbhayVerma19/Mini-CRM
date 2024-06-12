import React, { useState } from "react";
import CustomerForm from "./components/Customer/CustomerForm";
import OrderForm from './components/Order/OrderForm';
import AudienceForm from "./components/Audience/AudienceForm";
import Navbar from "./components/Navbar/Navbar";
import CampaignList from './components/Campaigns/CampaignList';
import AudienceList from "./components/Audience/AudienceList";
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer";

import { Route, Routes, Switch } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>

        <Route path="/" element={<GetStarted/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/audience" element={<AudienceForm />}></Route>
        <Route path="/customer" element={<CustomerForm />}></Route>
        <Route path="/order" element={<OrderForm />}></Route>
        <Route path="/campaign" element={<CampaignList />}></Route>
        <Route path="/audienceList" element={<AudienceList />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
