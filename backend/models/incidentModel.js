const mongoose = require('mongoose');

// mongoDB alone is schemaless, need mongoose package to create models and schemas
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  datetime: {
    type: Date,
    required: true,
  },
  type_of_incident: {
    type: String,
    required: true,
  },
  ski_run: {
    name: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Green', 'Blue', 'Black Diamond'],
      required: true,
    },
  },
  skier_age: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Incident', incidentSchema);
