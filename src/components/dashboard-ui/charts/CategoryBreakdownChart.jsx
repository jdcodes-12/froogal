import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
  {
    category: 'Rent',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    category: 'Transportation',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    category: 'Utility',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    category: 'Entertainment',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    category: 'Food',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    category: 'Miscellaneous',
    A: 65,
    B: 85,
    fullMark: 150,
  }
];


const CategoryBreakdownChart = () => {
  return (

    <RadarChart
    cx={200}
    cy={150}
    outerRadius={100}
    width={400}
    height={300}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="category" />
    <PolarRadiusAxis />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
    />
  </RadarChart>
  );
}

export default CategoryBreakdownChart;
