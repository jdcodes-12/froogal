import React from 'react';

import ExpenseItemCard from '../cards/ExpenseItemCard';
import ItemTile from '../../containers-ui/item-title-container';

import {  Box,
          Flex,
          Heading,
       } from '@chakra-ui/react';
const ExpenseWatcherList = () => {
  return (
    <Box>
      <Heading py='8' fontSize='3xl' align='center'>Expenses</Heading>
      <Flex direction='column' align='center' gap='8'>
        <ItemTile width='95%'/>
        <ExpenseItemCard width='95%'/>
        <ExpenseItemCard width='95%'/>
        <ExpenseItemCard width='95%'/>
        <ExpenseItemCard width='95%'/>
      </Flex>
    </Box>
  );
}

export default ExpenseWatcherList;