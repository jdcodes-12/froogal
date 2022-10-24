import React from 'react';

import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber, 
        } from '@chakra-ui/react';

const ItemBodyLayout = ({ itemQty, itemUnitPrice, itemName}) => {
  return (
    <Box>
      <Flex justify='space-between' 
        align='center' 
        w='full' 
        px='12px' 
        py='8px' 
        borderBottom='1px' 
        borderBottomColor='gray.100' 
        borderBottomWidth='50%'
      >
        <Flex direction='column' align='start'>
          <Text fontSize='md' fontWeight='hairline'>x{itemQty} @ ${itemUnitPrice.toFixed(2)}</Text>
          <Text fontSize='2xl' fontWeight='medium'>{itemName}</Text>
        </Flex>
        <Box alignSelf='end'>
          <Stat fontSize='lg' fontWeight='medium'>
            <StatNumber>$ {(itemUnitPrice * itemQty).toFixed(2)}</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Box>
  );
}

export default ItemBodyLayout;