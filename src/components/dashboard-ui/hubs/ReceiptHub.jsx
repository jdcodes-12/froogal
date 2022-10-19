import React from 'react';

import CreationModalButton from '../../modals/creation-modals/CreationModalButton';
import DeletionModalButton from '../../modals/DeletionModalButton';
import UpdateModalContainer from '../../modals/UpdateModalContainer';


import {  Box,
          Heading,
          Button,
          Flex, 
          SimpleGrid,
          Center,
          Text,
          Spacer
       } from '@chakra-ui/react';

const ReceiptHub = () => {
  return (
   <Box h='100%' border='2px' borderColor='red'>
    <Flex>
      <Box w='50%'>
        <Center>
          <Text>ReceiptView</Text>
        </Center>
      </Box>
      <Box w='50%'>
        <Flex direction="column">
          <Heading pb={4}>Receipt Hub</Heading>
          <SimpleGrid gap={4} px={4}>
            <CreationModalButton colorScheme='purple' variant='solid' text='Create'/>
            <DeletionModalButton variant='solid' colorScheme='purple' text='Delete'/>
            <UpdateModalContainer variant='solid' colorScheme='purple' text='Update'/>
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
   </Box>
  );
}

export default ReceiptHub;