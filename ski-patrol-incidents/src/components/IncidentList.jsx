import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await fetch('/api/incidents');
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setIncidents(json);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      {incidents.map((incident, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="div">
                {incident.datetime} - {incident.type_of_incident}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ski Run: {incident.ski_run.name}
              </Typography>
              <Typography variant="body2">{incident.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default IncidentList;
