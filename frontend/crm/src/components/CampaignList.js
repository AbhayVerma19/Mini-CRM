import React, { useEffect, useState } from 'react';
import { fetchCampaigns } from '../api';
import '../App.css';  // Import CSS file

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const { data } = await fetchCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    getCampaigns();
  }, []);

  return (
    <div className="campaign-list">
      <h2>Campaigns</h2>
      {campaigns.map((campaign) => (
        <div key={campaign._id} className="campaign-item">
          <p>Created At: {campaign.createdAt}</p>
          <p>Audience Size: {campaign.audience}</p>
          <p>Message: {campaign.message}</p>
          <p>SENT: {campaign.statusCount.SENT}</p>
          <p>FAILED: {campaign.statusCount.FAILED}</p>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
