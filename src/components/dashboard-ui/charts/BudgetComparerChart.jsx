import {
  Box,
  Flex,
  Heading,
  Badge,
  Center,
  Stat,
  StatNumber,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { getColorPerFinanceMode } from '../../../utils/frontend-functions/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const weekData = [
  {
    week: 'Mon',
    budget: 500,
    amountSpent: 42,

  },
  {
    week: 'Tues',
    budget: 500,
    amountSpent: 69,
  },
  {
    week: 'Wed',
    budget: 500,
    amountSpent: 202,
  },
  {
    week: 'Thur',
    budget: 500,
    amountSpent: 202,
  },
  {
    week: 'Fri',
    budget: 500,
    amountSpent: 278,
  },
  {
    week: 'Sat',
    budget: 500,
    amountSpent: 307,
  },
  {
    week: 'Sun',
    budget: 500,
    amountSpent: 502,
  },
];

const monthData = [
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
  {
    month: 'Aug',
    budget: 5000,
    amountSpent: 3200,
  },
  {
    month: 'Sep',
    budget: 5000,
    amountSpent: 2030,
  },
  {
    month: 'Nov',
    budget: 5000,
    amountSpent: 7000,
  },
  {
    month: 'Dec',
    budget: null,
    amountSpent: null,
  },
];

const yearData = [
  {
    year: '2019',
    budget: 100000,
    amountSpent: 79023,

  },
  {
    year: '2020',
    budget: 80000,
    amountSpent: 69000,
  },
  {
    year: '2021',
    budget: 140000,
    amountSpent: 150000,
  },
  {
    year: '2022',
    budget: 200000,
    amountSpent: 23000,
  },
];


const chooseData = (mode) => {
  switch (mode) {
    case 'weekly':
      return weekData;
    case 'monthly':
      return monthData;
    case 'annual':
      return yearData;
    default:
      return null;
  }
};

const getDataKey = (mode) => {
  switch (mode) {
    case 'weekly':
      return 'week';
    case 'monthly':
      return 'month';
    case 'annual':
      return 'year';
    default:
      return null;
  }
};

const BudgetComparerChart = ({ mode = '' }) => {
  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Budget Comparer Chart</Heading>
        <Badge fontSize='xl'
          colorScheme={getColorPerFinanceMode(mode)}
          py='2px'
          px='16px'
          rounded='sm'
          variant='subtle'
        >
          <Center>{mode}</Center>
        </Badge>
      </Flex>
      <Flex>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart
            data={chooseData(mode)}
            margin={{
              top: 30,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={`${getDataKey(mode)}`} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="amountSpent" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>


  );
};

export default BudgetComparerChart;