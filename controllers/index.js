const express = require ('express');
const router = express.Router();

const start = require('../models/start');
const pgup  = require('../models/pgup');
const pgdn  = require('../models/pgdn');
const card  = require('../models/card');
const find  = require('../models/find');

router.get('/start', (req, res) => {
  res.json(start())
});
router.get('/pgup', (req, res) => {
  res.json(pgup(req))
});
router.get('/pgdn', (req, res) => {
  res.json(pgdn(req))
});
router.get('/card', (req, res) => {
  res.json(card(req))
});
router.get('/find', (req, res) => {
  res.json(find(req))
});
module.exports = router;
