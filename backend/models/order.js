const mongoose = require('mongoose');
const Customer = require('./customer');
const orderSchema = new mongoose.Schema({
  customerId: {type:mongoose.Schema.Types.ObjectId, ref:Customer},
  amount:{type:Number,
    required:true,
    validate: { 
      validator: (value) => value >= 10,
      message: 'Order Amount must be at least 10'
    }
  },
  date: Date
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
