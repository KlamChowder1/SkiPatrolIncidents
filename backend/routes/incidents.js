const express = require('express');
const Incident = require('../models/incidentModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'GETTING ALL INCIDENTS' });
});

router.post('/', async (req, res) => {
  const { datetime, type_of_incident, ski_run, skier_age, description } =
    req.body;

  try {
    const incident = await Incident.create({
      datetime,
      type_of_incident,
      ski_run: {
        name: ski_run.name,
        difficulty: ski_run.difficulty,
      },
      skier_age,
      description,
    });
    res.status(200).json(incident);
  } catch (e) {
    res.json({ e: 'Failed to POST a new incident' });
  }
});

module.exports = router;
