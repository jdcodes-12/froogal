import React from 'react'

import  { Spacer,
          Flex,
          Badge,
          Center,
          Text,
          Stat,
          StatNumber,
          StatHelpText, 
        } from '@chakra-ui/react';

const ExpenseItemBodyLayout = () => {
  return (
    <Flex direction='column' px='23px'>
      <Flex justify='space-between' align='center' mb='23px'>
          <Badge fontSize='md' 
              colorScheme='purple' 
              py='1px' 
              px='15px' 
              rounded='sm'
              w='99px'
              variant='subtle'
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
  )
}

export default ExpenseItemBodyLayout