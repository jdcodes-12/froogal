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
const RecentReceiptsList = () => {
  return (
    <Box>
      <Heading py='6' fontSize='3xl' align='center'>Receipts</Heading>
      <Flex direction='column' gap='8' align='center'>
        <ReceiptItemTile width='95%'/>
        <ReceiptItemTile width='95%'/>
        <ReceiptItemTile width='95%'/>
      </Flex>
    </Box>
  );
}

export default RecentReceiptsList;