const express = require("express");
const Order = require("../models/order");
const Customer = require("../models/customer");
const router = express.Router();

router.get('/:id' , async (req,res)=>{
    const id=req.params.id;
    const orders = await Order.find({ customerId: id });
    res.json(orders)

})


router.post("/:id", async (req, res) => {
 try{
    const id = req.params.id;

  const newDate=new Date().toLocaleString()
  const newOrder = new Order({
    customerId: id,
    amount: parseFloat(req.body.amount),
    date: newDate,
  });
  await newOrder.save();
  const orders = await Order.find({ customerId: id });

  const customer = await Customer.findById(id);

  if (customer) {
    customer.totalSpends += parseFloat(req.body.amount);
    customer.visits+=1
    customer.lastVisit=newDate
    await customer.save();
  } else {
    return res.status(404).send({ error: "Customer not found" });
  }
  res.send(customer);
}
  catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: error.message });
  }
});
module.exports = router;
