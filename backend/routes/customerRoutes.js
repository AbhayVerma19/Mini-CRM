const express = require("express");
const Customer = require("../models/customer");
const router = express.Router();



router.get("/", (req, res) => {
  try {
    res.send("Helloooo from customer");
  } catch (error) {
    console.log(error)
  }
});

router.post("/", async (req, res) => {
  try {
    const newCustomer = new Customer({
      name: req.body.name,
      email: req.body.email,
      totalSpends: 0,
      visits: 0,
      lastVisit: new Date().toLocaleString(),
    });
     await newCustomer.save()
    res.status(200).json(newCustomer._id);
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.log(error)
      return res.status(400).json(error);
    }
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
