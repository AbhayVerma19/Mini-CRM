const mongoose = require('mongoose');
const customer = require('./customer');

const CampaignSchema = new mongoose.Schema({
  audience: {type:Number , default: 0},
  message:String,
  createdAt: { type: Date, default: Date.now },
  statusCount: {
    SENT: { type: Number, default: 0 },
    FAILED: { type: Number, default: 0 },
  },
});
const Campaign=mongoose.model('Campaign', CampaignSchema);
module.exports = Campaign
