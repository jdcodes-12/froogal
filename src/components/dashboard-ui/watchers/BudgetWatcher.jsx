import React from 'react';

import { Box,
         Flex,
         Heading,
         Badge,
         Center,
         Stat,
         StatNumber,
         Button,
       } from '@chakra-ui/react';

const BudgetWatcher = () => {
  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Budget For Period</Heading>
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
          <StatNumber fontSize='6xl'>$1575.00</StatNumber>
        </Stat>
       </Box>
      </Flex>
      <Flex justify='center' align='center'>
        <Button variant='outline' colorScheme='purple' fontSize='2xl' size='lg' w='full'>
          Adjust Budget
        </Button>
      </Flex>
    </Flex>
  );
}

export default BudgetWatcher;