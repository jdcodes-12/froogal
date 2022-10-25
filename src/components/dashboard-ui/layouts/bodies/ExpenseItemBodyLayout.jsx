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

const ExpenseItemBodyLayout = () => {

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Flex direction='column' px='23px'>
      <Flex justify='space-between' align='center' mb='23px'>
          <Badge  fontSize='md' 
                  color={badgeColor}
                  bg={badgeBg} 
                  py='1px' 
                  px='15px' 
                  rounded='sm'
                  w='99px'
          >
              <Center>Pending</Center>
          </Badge>
          <Text fontSize='lg' fontWeight='medium'>9/20/22</Text>
      </Flex>
      <Flex justify='space-between' align='center'>
          <Text fontSize='1xl' fontWeight='medium'>NETFLIX</Text>
          <Spacer/>
          <Flex>
            <Stat>
                <StatNumber fontSize='2xl'>$100.00</StatNumber>
            </Stat>
          </Flex>
      </Flex>
      <Flex justify='center' align='center' pt='15px'>
          <Center>
            <Stat>
                <StatHelpText fontSize='1xl' fontWeight='hairline'>due in 4 days.</StatHelpText>
            </Stat>
          </Center>
      </Flex>
    </Flex>
  );
}

export default ExpenseItemBodyLayout;