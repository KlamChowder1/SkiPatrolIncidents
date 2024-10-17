import React from 'react';
import { Grid, Container } from '@mui/material';
import {
  SkiRunDifficultyPieChart,
  SkierAgeRangeBarChart,
  IncidentTimeLineChart,
} from './charts';

export default function IncidentCharts() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <IncidentTimeLineChart />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkiRunDifficultyPieChart />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkierAgeRangeBarChart />
        </Grid>
      </Grid>
    </Container>
  );
}
