import React from 'react';

import {  Box,
          Flex,
          Heading,
          Text
       } from '@chakra-ui/react';
const ExpenseWatcherList = () => {
  return (
    <Box border='1px' borderColor='black'>
      <Heading fontSize='xl'>Expenses</Heading>
      <Flex direction='column' border='1px' borderColor='black'>
        <Text>Expense Card</Text>
        <Text>Expense Card</Text>
        <Text>Expense Card</Text>
        <Text>Expense Card</Text>
        <Text>Expense Card</Text>
      </Flex>
    </Box>
  );
}

export default ExpenseWatcherList;