import React from 'react';
import { Grid, Container } from '@mui/material';
import {
  SkiRunDifficultyPieChart,
  SkierAgeRangeBarChart,
  IncidentTimeLineChart,
} from './charts';

export default function IncidentCharts() {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: 8 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item sm={12} md={6} lg={4}>
          <IncidentTimeLineChart />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <SkiRunDifficultyPieChart />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <SkierAgeRangeBarChart />
        </Grid>
      </Grid>
    </Container>
  );
}
