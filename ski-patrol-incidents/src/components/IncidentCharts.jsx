import React from 'react';
import { Grid } from '@mui/material';
import {
  SkiLevelPieChart,
  SkiRunBarChart,
  SkierAgeRangeBarChart,
  IncidentTimeLineChart,
} from './charts';

export default function IncidentCharts() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <IncidentTimeLineChart />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <SkiLevelPieChart />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <SkiRunBarChart />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <SkierAgeRangeBarChart />
      </Grid>
    </Grid>
  );
}
