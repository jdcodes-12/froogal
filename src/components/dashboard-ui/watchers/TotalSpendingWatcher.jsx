import React from 'react';

import { Box,
         Stat,
         StatLabel,
         StatHelpText,
         StatNumber,
         HStack,
         VStack,
         Flex,
         Heading,
       } from '@chakra-ui/react';



const TotalSpendingWatcher = () => {
  return (
    <Box border ='1px' borderColor='black' >
      <Heading py='3' fontSize='3xl' align='center'>Total Spending Tracker</Heading>
      <Flex direction='column'>
        <Stat>
          
            <VStack border='1px' borderColor='blue' align='left'>
              <StatLabel fontSize='xl'>Spending For Period:</StatLabel>
              <HStack border='1px' borderColor='orange'>
              <StatHelpText  fontWeight='bold' textColor='purple'>Monthly: </StatHelpText>
              <StatNumber>$4000</StatNumber>
              </HStack>

              <HStack border='1px' borderColor='purple'>
              <StatHelpText fontWeight='bold' textColor='purple'>Weekly: </StatHelpText>
              <StatNumber>$1000</StatNumber>
              </HStack>
            </VStack>
          
        </Stat>
      </Flex>
    </Box>
  );
}

export default TotalSpendingWatcher;