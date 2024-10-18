import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Divider } from '@mui/material';

const IncidentList = () => {
  const [groupedIncidents, setGroupedIncidents] = useState({});

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await fetch('/api/incidents');
      const json = await response.json();

      if (response.ok) {
        const sortedIncidents = json.sort(
          (a, b) => new Date(b.datetime) - new Date(a.datetime)
        );

        // Group incidents by date
        const incidentsByDate = sortedIncidents.reduce((acc, incident) => {
          const date = formatDate(incident.datetime);
          if (!acc[date]) acc[date] = [];
          acc[date].push(incident);
          return acc;
        }, {});

        setGroupedIncidents(incidentsByDate);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      {Object.keys(groupedIncidents).map((date) => (
        <>
          <Grid item xs={12}>
            <Divider sx={{ mx: 2 }}>
              <Typography variant="h6">{date}</Typography>
            </Divider>
          </Grid>
          {groupedIncidents[date].map((incident, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {new Date(incident.datetime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}{' '}
                    - {incident.type_of_incident}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ski Run: {incident.ski_run.name} (
                    {incident.ski_run.difficulty})
                  </Typography>
                  <Typography variant="body2">
                    {incident.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </>
      ))}
    </Grid>
  );
};

export default IncidentList;
