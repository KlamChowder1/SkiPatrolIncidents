const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'GETTING ALL INCIDENTS' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'POST AN INCIDENT' });
});

module.exports = router;
