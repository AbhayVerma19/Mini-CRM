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

  var newDate=new Date().toLocaleString()
  console.log(newDate)
  const newOrder = new Order({
    customerId: id,
    amount: req.body.amount,
    date: newDate,
  });
  await newOrder.save();
  const orders = await Order.find({ customerId: id });

  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total += orders[i].amount;
  }

  const customer = await Customer.findById(id);

  if (customer) {
    customer.totalSpends = total;
    customer.visits+=1
    customer.lastVisit=newDate
    await customer.save();
  } else {
    return res.status(404).send({ error: "Customer not found" });
  }
  res.send(newOrder);
}
  catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: error.message });
  }
});
module.exports = router;
