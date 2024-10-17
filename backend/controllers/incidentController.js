const Incident = require('../models/incidentModel');
const mongoose = require('mongoose');

// get all incidents
const getIncidents = async (req, res) => {
  const incidents = await Incident.find({}).sort({ createdAt: -1 });
  console.log('getting all incidents');
  res.status(200).json(incidents);
};

// create new incident
const createIncident = async (req, res) => {
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
};

module.exports = {
  createIncident,
  getIncidents,
};
