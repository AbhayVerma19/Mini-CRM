import React, { useEffect, useState } from "react";
import axios from "axios";
import "./campaign.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const CampaignList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const response = await axios.get(`https://mini-crm-js0c.onrender.com/api/campaign`);
        const sortedCampaigns = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setCampaigns(sortedCampaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };
    getCampaigns();
  }, []);

  const sendAudience = async (campaignId) => {
    try {
      await axios
        .post("https://mini-crm-js0c.onrender.com/api/campaign/sendAudience", {
          id: campaignId,
        })
        .then((res) => {
          const audienceData = res.data;
          navigate("/audienceList", { state: { audience: audienceData } });
        });
    } catch (error) {
      console.log(error);
      alert("Error Seeing Audience");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="  campaign-list ">
        <h2 className="relative campaign-list__heading rounded-md ">
          Campaigns
          <span className=" absolute inset-y-0 right-0 p-2">
            <Link to={'/audience'}><button className="bg-blue-300 rounded-md p-1 text-lg">Create</button>
            </Link>
          </span>
        </h2>
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="campaign-item text-lg">
            <p className=" font-bold">Campaign Id: {campaign._id}</p>
            <p className="">Audience Size: {campaign.audience}</p>
            <p className="">Message: {campaign.message}</p>
            <p className="">Created At: {campaign.createdAt}</p>
            <p className=" text-green-500">SENT: {campaign.statusCount.SENT}</p>
            <p className=" text-red-600">
              FAILED: {campaign.statusCount.FAILED}
            </p>
            <div className="flex  justify-end mr-10">
              <button
                onClick={() => sendAudience(campaign._id)}
                className=" bg-blue-500 text-white justify-end px-2"
              >
                Show Audience
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
