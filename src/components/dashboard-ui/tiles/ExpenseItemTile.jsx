import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';

import { Text,
         Flex,
         Badge,
         Stat,
         StatNumber,
         StatHelpText,
         Spacer,
         Center,
       } from '@chakra-ui/react';

const ExpenseItemTile = (props) => {
  const { width } = props;

  return (
   <ItemTileContainer width={width}>
      <Flex direction='column' px='24px'>
        <Flex justify='space-between' align='center' mb='24px'>
          <Badge fontSize='md' colorScheme='purple' py='2px' px='16px' rounded='sm'>Pending</Badge>
          <Text fontSize='lg' fontWeight='medium'>10/20/22</Text>
        </Flex>
        <Flex justify='space-between' align='center'>
          <Text fontSize='2xl' fontWeight='medium'>NETFLIX</Text>
          <Spacer/>
          <Flex>
            <Stat>
              <StatNumber fontSize='3xl'>$100.00</StatNumber>
            </Stat>
          </Flex>
        </Flex>
        <Flex justify='center' align='center' pt='16px'>
          <Center>
            <Stat>
              <StatHelpText fontSize='2xl' fontWeight='hairline'>due soon...</StatHelpText>
            </Stat>
          </Center>
        </Flex>
      </Flex>
   </ItemTileContainer>
  );
}

export default ExpenseItemTile;