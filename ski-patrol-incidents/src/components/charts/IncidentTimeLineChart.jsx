import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';

const IncidentOverTimeLineChart = ({ incidents }) => {
  console.log(incidents);

  const incidentsByDate = incidents.reduce((acc, incident) => {
    const date = format(new Date(incident.datetime), 'yyyy-MM-dd');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // console.log(incidentsByDate);

  // need to sort the chartData by date otherwise the x axis gets messed up
  const chartData = Object.keys(incidentsByDate)
    .map((date) => ({
      date,
      count: incidentsByDate[date],
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <Box sx={{ boxShadow: 2, p: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Incidents over Time
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: 'Date', position: 'bottom' }} />
          <YAxis
            label={{
              value: '# of Incidents',
              angle: -90,
            }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" label="test" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default IncidentOverTimeLineChart;
