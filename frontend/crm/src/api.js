import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createCustomer = (data) => axios.post(`${API_URL}/customer`, data);
export const createOrder = (customerId, data) => axios.post(`${API_URL}/order/${customerId}`, data);
export const fetchAudience = (rules) => axios.post(`${API_URL}/audience`, { rules });
export const sendCampaign = (data) => axios.post(`${API_URL}/campaign/sendCampaign`, data);
export const fetchCampaigns = () => axios.get(`${API_URL}/campaign`);
