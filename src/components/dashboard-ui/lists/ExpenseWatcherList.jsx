import React from 'react';

import ExpenseItemTile from '../tiles/ExpenseItemTile';

import {  Box,
          Flex,
          Heading,
       } from '@chakra-ui/react';
       
/*
* The ExpenseWatcherList should only render 
* 5 most recent receipts by default.
* The list should only show 5 ExpenseItemTile.
*/
const ExpenseWatcherList = () => {
  return (
    <Box>
      <Heading py='8' fontSize='3xl' align='center'>Expenses</Heading>
      <Flex direction='column' align='center' gap='8'>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
      </Flex>
    </Box>
  );
}

export default ExpenseWatcherList;