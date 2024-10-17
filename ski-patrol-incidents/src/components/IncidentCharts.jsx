import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import sampleIncidents from './sampleIncidents.json';

const COLOURS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

const IncidentRunDifficultyPieChart = () => {
  // pie chart data looks like this: https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
  // const data = [
  //     { name: 'Group A', value: 400 },
  //     { name: 'Group B', value: 300 },
  //     { name: 'Group C', value: 300 },
  //     { name: 'Group D', value: 200 },
  //   ];

  const difficultyCounts = sampleIncidents.incidents.reduce((acc, incident) => {
    acc[incident.ski_run_difficulty] =
      (acc[incident.ski_run_difficulty] || 0) + 1;
    return acc;
  }, {});

  console.log(difficultyCounts);

  const data = Object.keys(difficultyCounts).map((difficulty) => ({
    name: difficulty,
    value: difficultyCounts[difficulty],
  }));

  console.log(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLOURS[index % COLOURS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default IncidentRunDifficultyPieChart;
