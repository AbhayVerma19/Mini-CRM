const express = require("express");
const router = express.Router();
const CommunicationLog = require("../models/communicationLog");
const Customer = require("../models/customer.js");
const Campaign = require("../models/campaign.js");

router.get('/', async (req,res)=>{
    try {
        const campaign = await Campaign.find()
        res.json(campaign).status(200)
        
    } catch (error) {
        res.send(error)
    }
})

router.post("/sendCampaign", async (req, res) => {
  const { audience } = req.body;
  const size  = req.body.size;
  const  campaignMessage  = req.body.message;

  try {

    const campaign = new Campaign({
        audience: size,
        message:campaignMessage,
        createdAt: new Date().toLocaleString(),
      });
      await campaign.save();


    await saveToCommunicationLog(audience,campaignMessage);
    await DummyVendorAPI(audience,campaign._id);
    res.send({ message: "Campaign sent successfully" });
  } catch (error) {
    console.error("Error sending campaign:", error);
    res.status(500).send({ error: "Failed to send campaign" });
  }
});

const saveToCommunicationLog = async (audience,campaignMessage) => {
  for (const _id of audience) {
    const customer = await Customer.findById(_id);
    const message = `Hi ${customer.name},` + campaignMessage;
    const communicationLog = new CommunicationLog({
      customerId: customer._id,
      message: message,
      status: "PENDING",
      sentAt: new Date().toLocaleString(),
    });
    await communicationLog.save();
  }
};

const DummyVendorAPI = async (audience,campaignId) => {
  for (const _id of audience) {
    const customer = await Customer.findById(_id);
    const deliveryStatus = Math.random() < 0.9 ? "SENT" : "FAILED";
    await deliveryReceiptAPI(customer._id, deliveryStatus, campaignId);
    console.log(_id);
  }
};

const deliveryReceiptAPI = async (customerId, status,campaignId) => {
  try {
    await CommunicationLog.updateOne(
      { customerId: customerId },
      { status: status , campaignId:campaignId }
    );

    await Campaign.updateOne(
        { _id: campaignId },
        { $inc: { [`statusCount.${status}`]: 1 } }
      );
  } catch (error) {
    console.error("Error updating communication log:", error);
  }
};

module.exports = router;
