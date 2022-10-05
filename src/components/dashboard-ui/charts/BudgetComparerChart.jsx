import React from 'react';

import { LineChart, 
         Line, 
         CartesianGrid, 
         XAxis, 
         YAxis } from 'recharts';

const data = [
  {
    category: "Budget Amnt.",
    amount: 2000,
  },
  {
    category: "Spending Amnt.",
    amount: 1000,
  },
];

const BudgetComparerChart = () => {
  return (
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis />
      <YAxis />
    </LineChart>
  );
};

export default BudgetComparerChart;