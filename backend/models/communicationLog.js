const mongoose = require('mongoose');
const Customer = require('./customer');
const communicationLogSchema = new mongoose.Schema({
  customerId: String,
  campaignId:String,
  message: String,
  status: String,
  sentAt: Date
});
const CommunicationLog = mongoose.model('CommunicationLog', communicationLogSchema);
module.exports = CommunicationLog;
