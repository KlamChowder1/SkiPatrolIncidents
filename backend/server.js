require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const incidentRoutes = require('./routes/incidents');

const app = express();

// some middleware to parse requests into req.body
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/incidents', incidentRoutes);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port 4000');
    });
  })
  .catch((e) => {
    console.log(e);
  });
