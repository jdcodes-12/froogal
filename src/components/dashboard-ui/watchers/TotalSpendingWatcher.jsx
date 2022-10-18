import React from 'react';

import { Box,
         Flex,
         Heading,
         Text,
         Badge,
         Center,
         Stat,
         StatNumber,
         Button,
       } from '@chakra-ui/react';



const TotalSpendingWatcher = () => {
  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Spending for Period</Heading>
        <Badge fontSize='xl' 
               colorScheme='purple' 
               py='2px' 
               px='16px' 
               rounded='sm'
               variant='subtle'
          >
            <Center>Weekly</Center>
          </Badge>
      </Flex>
      <Flex justify='center' align='center' pl='8px' pr='12px' py='32px'>
       <Box>
        <Stat>
          <StatNumber fontSize='6xl'>$800.00</StatNumber>
        </Stat>
       </Box>
      </Flex>
      <Flex justify='center' align='center'>
        <Box w='60%' align='center' borderTop='1px' borderColor='purple'>
          <Text pt='16px' fontSize='2xl' fontWeight='thin'>You have ${1575.00-800.00} left before going over budget.</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default TotalSpendingWatcher;