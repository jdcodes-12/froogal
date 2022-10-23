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
      <Flex justify='space-between' align='center' pl='8px' pr='12px' pt='64px'>
        <Text fontSize='6xl'>$</Text>
        <Box>
          <Stat>
            <StatNumber fontSize='6xl'>1020.19</StatNumber>
          </Stat>
        </Box>
      </Flex>
      <Flex justify='center' align='center' pt='16px'>
        <Box align='center' >
          <Text pt='16px' fontSize='2xl' fontWeight='normal'>You have ${1575.00-1020.19.toFixed(2)} left before going over budget.</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default TotalSpendingWatcher;