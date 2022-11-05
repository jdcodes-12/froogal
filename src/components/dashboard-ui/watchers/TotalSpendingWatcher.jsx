import React from 'react';
import { getColorPerFinanceMode } from '../../../utils/frontend-functions/utils';
import { Box,
         Flex,
         Heading,
         Text,
         Badge,
         Center,
         Stat,
         StatNumber,
         useColorModeValue,
       } from '@chakra-ui/react';

const TotalSpendingWatcher = ({ ReceiptSpendingTotal = 0.00, financialSettings = null, mode = '' }) => {
  const financeMode = mode + "Budget";
  const currentDifference = financialSettings?.[financeMode] - ReceiptSpendingTotal;
  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Spending for Period</Heading>
        <Badge fontSize='xl' 
               colorScheme={getColorPerFinanceMode(mode)} 
               color={badgeColor}
               bg={badgeBg}
               py='2px' 
               px='16px' 
               rounded='md'  
          >
            <Center>{mode}</Center>
          </Badge>
      </Flex>
      <Flex justify='space-between' align='center' pl='8px' pr='12px' pt='64px'>
        <Text fontSize='6xl'>$</Text>
        <Box>
          <Stat>
            <StatNumber fontSize='6xl'>{ReceiptSpendingTotal.toFixed(2)}</StatNumber>
          </Stat>
        </Box>
      </Flex>
      <Flex justify='center' align='center' pt='16px'>
        <Box align='center' >
          <Text pt='16px' fontSize='2xl' fontWeight='normal'>You have ${currentDifference.toFixed(2)} left before going over budget.</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default TotalSpendingWatcher;