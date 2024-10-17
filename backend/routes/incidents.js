const express = require('express');
const {
  createIncident,
  getIncidents,
} = require('../controllers/incidentController');

const router = express.Router();

// GET all incidents
router.get('/', getIncidents);

// CREATE incident
router.post('/', createIncident);

// don't need Update or Delete incidents because reported incidents should not be modified

module.exports = router;
