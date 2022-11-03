import React from 'react';

import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber,
          Badge,
          Center,
        } from '@chakra-ui/react'

const ExpenseListItemLayout = ({ expenseDueDate, expenseName, expensePrice, status}) => {

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
          <Text fontSize='md' fontWeight='hairline'>{expenseDueDate}</Text>
          <Text fontSize='2xl' fontWeight='medium'>{expenseName}</Text>
        </Flex>
        <Flex alignSelf='end' direction='column'>
          {/* ColorModeValue HEre */}
          <Badge fontSize='sm' colorScheme='purple'>
            <Center>
              {status}
            </Center>
          </Badge>
          <Stat fontSize='lg' fontWeight='medium'>
            <StatNumber>$ {(expensePrice).toFixed(2)}</StatNumber>
          </Stat>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ExpenseListItemLayout;