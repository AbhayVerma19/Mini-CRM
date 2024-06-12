import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerForm from "./components/Customer/CustomerForm";
import OrderForm from "./components/Order/OrderForm";
import AudienceForm from "./components/Audience/AudienceForm";
import Navbar from "./components/Navbar/Navbar";
import CampaignList from "./components/Campaigns/CampaignList";
import AudienceList from "./components/Audience/AudienceList";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import LoginPage from "./components/Login/LoginPage";
import { AuthProvider, useAuth } from "./Firebase/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <LoginPage />;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/audience"
            element={
              <PrivateRoute>
                <AudienceForm />
              </PrivateRoute>
            }
          />
          <Route path="/customer" element={<CustomerForm />} />
          <Route path="/order" element={<OrderForm />} />
          <Route
            path="/campaign"
            element={
              <PrivateRoute>
                <CampaignList />
              </PrivateRoute>
            }
          />
          <Route
            path="/audienceList"
            element={
              <PrivateRoute>
                <AudienceList />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
