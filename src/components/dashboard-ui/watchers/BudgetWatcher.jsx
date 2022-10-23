import React from 'react';

import ButtonModalContainer from '../../modals/ButtonModalContainer';
import AdjustBudgetModalBody from '../../modals/modal-bodies/AdjustBudgetModalBody';

import { Box,
         Flex,
         Heading,
         Badge,
         Center,
         Stat,
         StatNumber,
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
        <ButtonModalContainer colorScheme='purple' 
                              btnVariant='outline' 
                              btnText='Adjust Budget' 
                              width='full'
                              modalTitle='Adjust Budget'>
          <AdjustBudgetModalBody />
        </ButtonModalContainer>
      </Flex>
    </Flex>
  );
}

export default BudgetWatcher;