const Item = require('../item');
const express = require('express');

const router = express.Router();

router.get('', (req, res, next) {
  try {
    return res.json({ items: Item.findAll() });
  } catch(err) {
    return next(err)
  }
})