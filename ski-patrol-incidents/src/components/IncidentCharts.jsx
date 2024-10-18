import React, { useEffect } from 'react';
import { Grid, CircularProgress, Container } from '@mui/material';
import {
  SkiRunDifficultyPieChart,
  SkierAgeRangeBarChart,
  IncidentTimeLineChart,
} from './charts';
import { useIncident } from '../hooks/useIncident';
import { useSnackbar } from '../hooks/useSnackbar';

export default function IncidentCharts() {
  const { showSnackbar } = useSnackbar();
  const { incidents, loading, error } = useIncident();

  useEffect(() => {
    if (error) {
      showSnackbar(error, 'Could not load incidents');
    }
  }, [error, showSnackbar]);

  return loading ? (
    <Grid container justifyContent="center" alignItems="center">
      <CircularProgress />
    </Grid>
  ) : (
    <Container maxWidth="xl" sx={{ px: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item sm={12} md={6} lg={6}>
          <IncidentTimeLineChart incidents={incidents} />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <SkiRunDifficultyPieChart incidents={incidents} />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <SkierAgeRangeBarChart incidents={incidents} />
        </Grid>
      </Grid>
    </Container>
  );
}
