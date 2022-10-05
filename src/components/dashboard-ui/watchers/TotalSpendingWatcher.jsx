import React from 'react';

import { Box,
         Stat,
         StatLabel,
         StatHelpText,
         StatNumber,
         HStack,
         VStack,
         Flex,
       } from '@chakra-ui/react';

const TotalSpendingWatcher = () => {
  return (
    <Box border='1px' borderColor='black' w='sm'>
      <Flex direction='column'>
        <Stat>
          <HStack>
            <VStack>
              <StatLabel>Spending For Period</StatLabel>
              <StatHelpText>Weekly</StatHelpText>
            </VStack>
            <StatNumber>$1000</StatNumber>
          </HStack>
        </Stat>
      </Flex>
    </Box>
  );
}

export default TotalSpendingWatcher;