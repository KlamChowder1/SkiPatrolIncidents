import React from 'react';
import { SkiLevelPieChart, SkiRunBarChart, SkierAgeLineChart } from './charts';

export default function IncidentCharts() {
  return (
    <>
      <SkiLevelPieChart />
      <SkiRunBarChart />
      <SkierAgeLineChart />
    </>
  );
}
