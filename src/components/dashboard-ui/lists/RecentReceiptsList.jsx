import React from 'react';

import ReceiptItemTile from '../tiles/ReceiptItemTile';

import { Box,
         Flex,
         Heading,
         Text,
       } from '@chakra-ui/react';

/*
* The RecentReceiptsList should only render 
* 3 most recent receipts by default.
* The list should only show 3 ReceiptItemTiles.
*/
const generateReceiptTile = (receipts) => {
  switch (receipts.length ?? 0) {
    case 0: 
      return <Box>No Receipts Yet</Box>
    case 1: 
      return ( 
        <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
        );
    case 2: 
      return ( <> 
          <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
          <ReceiptItemTile receipt={receipts[1]} width='95%' /> 
        </> );
    case 3: 
    return ( <> 
        <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
        <ReceiptItemTile receipt={receipts[1]} width='95%' />
        <ReceiptItemTile receipt={receipts[2]} width='95%' /> 
      </> );
    default: 
    return ( <> 
      <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
      <ReceiptItemTile receipt={receipts[1]} width='95%' />
      <ReceiptItemTile receipt={receipts[2]} width='95%' /> 
    </> );
  }
}

const RecentReceiptsList = ({
  receipts = [],
}) => {

  return (
    <Box>
      <Heading py='6' fontSize='3xl' align='center'>Recent Receipts</Heading>
      <Flex direction='column' gap='8' align='center'>
        { generateReceiptTile(receipts) }
       </Flex>
    </Box>
  );
}

export default RecentReceiptsList;