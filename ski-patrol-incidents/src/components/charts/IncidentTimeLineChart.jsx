import React from 'react';
import { Typography } from '@mui/material';
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import sampleIncidents from '../sampleIncidents.json';
import { format } from 'date-fns';

const IncidentOverTimeLineChart = () => {
  const incidentsByDate = sampleIncidents.incidents.reduce((acc, incident) => {
    const date = format(new Date(incident.datetime), 'yyyy-MM-dd');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  console.log(incidentsByDate);

  const chartData = Object.keys(incidentsByDate).map((date) => ({
    date,
    count: incidentsByDate[date],
  }));

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Incidents over Time
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date">
            <Label offset={70}>Date</Label>
          </XAxis>
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Counts
            </Label>
          </YAxis>
          <Tooltip />
          <Label YAxis="Test" XAxis="blah" />
          <Line type="monotone" dataKey="count" stroke="#8884d8" label="test" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default IncidentOverTimeLineChart;
