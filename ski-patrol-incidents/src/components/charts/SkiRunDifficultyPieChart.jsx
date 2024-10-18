import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const COLOURS = {
  Green: '#008000',
  Blue: '#000080',
  'Black Diamond': '#000000',
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function SkiRunDifficultyPieChart({ incidents }) {
  // pie chart data looks like this: https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
  // const data = [
  //     { name: 'Group A', value: 400 },
  //     { name: 'Group B', value: 300 },
  //     { name: 'Group C', value: 300 },
  //     { name: 'Group D', value: 200 },
  //   ];

  const difficultyCounts = incidents.reduce((acc, incident) => {
    const difficulty = incident.ski_run.difficulty; // Updated to use difficulty
    acc[difficulty] = (acc[difficulty] || 0) + 1; // Count incidents per difficulty
    return acc;
  }, {});

  console.log(difficultyCounts);

  const data = Object.keys(difficultyCounts).map((difficulty) => ({
    name: difficulty,
    value: difficultyCounts[difficulty],
  }));

  console.log(data);

  return (
    <Box sx={{ boxShadow: 2, p: 2, borderRadius: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Incidents by Ski Run Difficulty
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            label={renderCustomizedLabel}
            labelLine={false}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLOURS[entry.name]} />
            ))}
          </Pie>
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
