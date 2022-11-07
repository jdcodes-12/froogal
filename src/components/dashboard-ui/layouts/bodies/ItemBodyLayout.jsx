import React from 'react';

import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber, 
          useColorModeValue
        } from '@chakra-ui/react';

const ItemBodyLayout = ({ itemQty = null, itemUnitPrice = null, itemName = null}) => {
  const itemBodyExists = itemQty && itemUnitPrice && itemName;

  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');

  return (
    (itemBodyExists) ? <Box>
      <Flex justify='space-between' 
        align='center' 
        w='full' 
        px='12px' 
        py='8px' 
        borderBottom='1px' 
        borderBottomColor={borderColor}
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
    : <Box w='full' px='12px' py='8px' borderBottom='1px'>No items yet</Box>
    );
}

export default ItemBodyLayout;