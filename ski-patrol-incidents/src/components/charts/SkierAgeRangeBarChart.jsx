import React from 'react';
import { Typography } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import sampleIncidents from '../sampleIncidents.json';

const ageRanges = [
  { name: '0-18', min: 0, max: 18 },
  { name: '18-24', min: 18, max: 24 },
  { name: '25-34', min: 25, max: 34 },
  { name: '35-44', min: 35, max: 44 },
  { name: '45-54', min: 45, max: 54 },
  { name: '55-64', min: 55, max: 64 },
  { name: '65+', min: 65, max: 100 },
];

export default function SkierAgeRangeBarChart() {
  const ageCounts = ageRanges.map((range) => ({
    name: range.name,
    count: 0,
  }));

  sampleIncidents.incidents.forEach((incident) => {
    const age = incident.skier_age;
    // have to find the age that fits in the age range
    const range = ageRanges.find((r) => age >= r.min && age <= r.max);
    if (range) {
      const index = ageCounts.findIndex((r) => r.name === range.name);
      if (index !== -1) {
        // increment the count of the ageCounts if age is within that range
        ageCounts[index].count += 1;
      }
    }
  });

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Incidents by Age Group
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={ageCounts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}