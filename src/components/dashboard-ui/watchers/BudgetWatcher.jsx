import React from 'react';

import { Box,
         Stat,
         StatLabel,
         StatHelpText,
         StatNumber,
         HStack,
         VStack,
         Flex,
         Button,
       } from '@chakra-ui/react';

const BudgetWatcher = () => {
  return (
    <Box border='1px' borderColor='black' w='sm'>
      <Flex direction='column'>
        <Stat>
         <StatLabel>Budget For Period:</StatLabel>
         <StatNumber>$10000</StatNumber>
         <HStack>
          <StatHelpText>Weekly</StatHelpText>
          <Button>Adjust Budget</Button>
         </HStack>
        </Stat>
      </Flex>
    </Box>
  );
}

export default BudgetWatcher;