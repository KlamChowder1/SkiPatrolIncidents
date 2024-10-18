import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Divider,
  CircularProgress,
  Box,
} from '@mui/material';
import { useIncident } from '../hooks/useIncident';
import { useSnackbar } from '../hooks/useSnackbar';

export default function IncidentList() {
  const { incidents, loading, error } = useIncident();
  const { showSnackbar } = useSnackbar();

  const [groupedIncidents, setGroupedIncidents] = useState({});

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (error) {
      showSnackbar(error, 'Could not load incidents');
    }
  }, [error, showSnackbar]);

  useEffect(() => {
    const fetchIncidents = async () => {
      if (incidents.length > 0) {
        const sortedIncidents = incidents.sort(
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
  }, [incidents]);

  // can use skeletons too but loading is simpler for now
  return loading ? (
    <Grid container justifyContent="center" style={{ padding: '20px' }}>
      <CircularProgress />
    </Grid>
  ) : (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      {Object.keys(groupedIncidents).map((date, index) => (
        <>
          <Grid item xs={12} key={index}>
            <Divider sx={{ mx: 2 }}>
              <Typography variant="h6">{date}</Typography>
            </Divider>
          </Grid>
          {groupedIncidents[date].map((incident, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ boxShadow: 2, p: 2, borderRadius: 2 }}>
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
                <Typography variant="body2">{incident.description}</Typography>
              </Box>
            </Grid>
          ))}
        </>
      ))}
    </Grid>
  );
}
