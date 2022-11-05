import React from 'react';

import  { Spacer,
          Flex,
          Badge,
          Center,
          Text,
          Stat,
          StatNumber,
          StatHelpText,
          useColorModeValue,
        } from '@chakra-ui/react';

const ExpenseItemBodyLayout = ({
  expense = { 
    dueDate: new Date('September 20, 2022'),
    isActive: true,
    locationName: "Netflix",
    price: 19.99
  }
}) => {

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');
  const dueDays = parseInt((expense.dueDate - new Date()) / 86400000);
  const dueSentence = `${dueDays < 0 ? 'Past due by' : 'Due in'} ${Math.abs(dueDays)} ${dueDays == 1 ? 'day' : 'days'}`
  return (
    <Flex direction='column' px='23px'>
      <Flex direction='column' justify='space-between' align='center'>
          <Badge  
            fontSize='md' 
            color={badgeColor}
            bg={badgeBg} 
            py='3px' 
            px='15px' 
            rounded='md'
            w='auto'
          >
              <Center>{expense.isActive ? 'Pending' : 'Paid'}</Center>
          </Badge>
          <Text fontSize='lg' textAlign='center' fontWeight='medium'>{expense.dueDate.toDateString()}</Text>
      </Flex>
      <Flex direction='column' justify='space-between' align='center'>
          <Text fontSize='1xl' fontWeight='medium'>{expense.locationName}</Text>
          <Spacer/>
          <Flex>
            <Stat>
                <StatNumber fontSize='2xl'>{expense.price}</StatNumber>
            </Stat>
          </Flex>
      </Flex>
      <Flex justify='center' align='center'>
          <Center>
            <Stat>
                <StatHelpText textAlign='center' fontSize='md' fontWeight='hairline'>{dueSentence}</StatHelpText>
            </Stat>
          </Center>
      </Flex>
    </Flex>
  );
}

export default ExpenseItemBodyLayout;