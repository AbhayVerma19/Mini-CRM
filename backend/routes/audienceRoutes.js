const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.js');

const operatorMapping = {
  '>': '$gt',
  '<': '$lt',
  '=': '$eq'
};

router.post('/', async (req, res) => {
    const { rules } = req.body;
  
    try {
      if (!Array.isArray(rules) || rules.length === 0) {
        return res.status(400).send({ error: "Rules must be a non-empty array" });
      }
  
      let query = {};
  
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const operator = operatorMapping[rule.operator];
        if (!operator) {
          return res.status(400).send({ error: `Invalid operator: ${rule.operator}` });
        }
  
        const condition = { [rule.field]: { [operator]: rule.value } };
  
        if (i === 0) {
          query = condition;
        } else {
          if (rule.logic === 'AND') {
            query = { $and: [query, condition] };
          } else {
            query = { $or: [query, condition] };
          }
        }
      }
      console.log("Constructed Query:", JSON.stringify(query));
      const audience = await Customer.find(query);
      if (!Array.isArray(audience)) {
        return res.status(500).send({ error: "Invalid audience data" });
      }
      res.json({ size: audience.length , audience });
      console.log(audience)
    } catch (error) {
      console.error("Error fetching audience:", error);
      res.status(500).send({ error: error.message });
    }
  });
  

module.exports = router;
