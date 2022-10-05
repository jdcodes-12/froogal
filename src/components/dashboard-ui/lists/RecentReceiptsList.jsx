import React from 'react';

import { Box,
         Flex,
         Heading,
         Text,
       } from '@chakra-ui/react';

const RecentReceiptsList = () => {
  return (
    <Box border='1px' borderColor='black'>
      <Heading fontSize='xl'>Receipts</Heading>
      <Flex direction='column' border='1px' borderColor='black'>
        <Text>Receipt Card</Text>
        <Text>Receipt Card</Text>
        <Text>Receipt Card</Text>
        <Text>Receipt Card</Text>
        <Text>Receipt Card</Text>
      </Flex>
    </Box>
  );
}

export default RecentReceiptsList;