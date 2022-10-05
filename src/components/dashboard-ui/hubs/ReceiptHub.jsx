import React from 'react';

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
            <Button variant='solid' colorScheme='purple'>Create</Button>
            <Button variant='solid' colorScheme='purple'>Delete</Button>
            <Button variant='solid' colorScheme='purple'>Search</Button>
            <Button variant='solid' colorScheme='purple'>Edit</Button>
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
   </Box>
  );
}

export default ReceiptHub;