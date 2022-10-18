import React from 'react';

import ExpenseItemTile from '../tiles/ExpenseItemTile';

import {  Box,
          SimpleGrid,
          Heading,
       } from '@chakra-ui/react';
       
/*
* The ExpenseWatcherList should only render 
* 5 most recent receipts by default.
* The list should only show 5 ExpenseItemTile.
*/
const ExpenseWatcherList = () => {
  return (
    <Box ml='16px'>
      <Heading py='8' fontSize='3xl' align='center'>Expenses</Heading>
      <SimpleGrid columns={2} spacing='10px'>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
        <ExpenseItemTile width='95%'/>
      </SimpleGrid>
    </Box>
  );
}

export default ExpenseWatcherList;