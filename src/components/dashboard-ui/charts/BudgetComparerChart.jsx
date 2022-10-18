import { Box,
  Flex,
  Heading,
  Badge,
  Center,
  Stat,
  StatNumber,
  Button,
} from '@chakra-ui/react';
import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    budget: 4000,
    amountSpent: 2330,
  
  },
  {
    month: 'Feb',
    budget: 3000,
    amountSpent: 2890,
  },
  {
    month: 'Mar',
    budget: 3000,
    amountSpent: 3530,
  },
  {
    month: 'Apr',
    budget: 3500,
    amountSpent: 3300,
  },
  {
    month: 'May',
    budget: 4000,
    amountSpent: 5300,
  },
  {
    month: 'Jun',
    budget: 4200,
    amountSpent: 3000,
  },
  {
    month: 'Jul',
    budget: 5000,
    amountSpent: 4400,
  },
];

const BudgetComparerChart = () => {
  return (

<Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Budget Comparer Chart</Heading>
        <Badge fontSize='xl' 
               colorScheme='green' 
               py='2px' 
               px='16px' 
               rounded='sm'
               variant='subtle'
          >
            <Center>Monthly</Center>
          </Badge>
      </Flex>
<Flex>
      <LineChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="amountSpent" stroke="#82ca9d" />
        </LineChart>
        </Flex>
      </Flex>
    
    
  );
};

export default BudgetComparerChart;