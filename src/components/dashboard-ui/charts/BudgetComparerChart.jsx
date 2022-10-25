import React from 'react';

import  { Flex,
          Heading,
          Badge,
          Center,
          useColorModeValue,
        } from '@chakra-ui/react';

import  { LineChart, 
          Line, 
          XAxis, 
          YAxis, 
          CartesianGrid, 
          Tooltip, 
          Legend, 
          ResponsiveContainer 
        } from 'recharts';

const data = [
  { month: 'Jan', budget: 4000.00, amountSpent: 2330.00, },
  { month: 'Feb', budget: 3000.00, amountSpent: 2890.00, },
  { month: 'Mar', budget: 3000.00, amountSpent: 3530.00, },
  { month: 'Apr', budget: 3500.00, amountSpent: 3300.00, },
  { month: 'May', budget: 4000.00, amountSpent: 5300.00, },
  { month: 'Jun', budget: 4200.00, amountSpent: 3000.00, },
  { month: 'Jul', budget: 5000.00, amountSpent: 4400.00, },
];

const BudgetComparerChart = () => {

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Budget Comparer Chart</Heading>
        <Badge fontSize='xl' 
               color={badgeColor}
               bg={badgeBg}
               py='2px' 
               px='16px' 
               rounded='sm'
               variant='subtle'
          >
            <Center>Monthly</Center>
          </Badge>
      </Flex>
      <Flex>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart  data={data}
                    margin={{ top: 30, right: 50, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
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