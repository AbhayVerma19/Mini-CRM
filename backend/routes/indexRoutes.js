const express = require('express');
const customerRoutes = require('./customerRoutes.js');
const orderRoutes = require('./orderRoutes.js');
const campaignRoutes = require('./campaignRoutes.js');
const audienceRoutes = require('./audienceRoutes.js');

const router = express();
router.get('/',(req,res)=>{
    res.send("Hello from index.js")
})
router.use('/customer', customerRoutes);
router.use('/order', orderRoutes);
router.use('/campaign', campaignRoutes);
router.use('/audience', audienceRoutes);

module.exports=router;