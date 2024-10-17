require('dotenv').config();

const express = require('express');
const incidentRoutes = require('./routes/incidents');

const app = express();

// some middleware to parse requests into req.body
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/incidents', incidentRoutes);

app.listen(process.env.PORT, () => {
  console.log('listening on port 4000');
});
