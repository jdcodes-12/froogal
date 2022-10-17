import React from 'react';

import { Box,
         Flex,
         Heading,
         Text,
         Badge,
         Center,
         Stat,
         StatArrow,
         Button,
       } from '@chakra-ui/react';

const OverUnderWatcher = () => {
  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>You are...</Heading>
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
      <Flex justify='center' align='center' px='8px' py='32px'>
        <Box>
          <Stat>
            <StatArrow type='increase' size='lg'/>
          </Stat>
        </Box>
        <Text ml='8px' fontSize='4xl' fontWeight='medium'>Over</Text>
      </Flex>
      <Flex justify='center' align='center' mt='16px'>
        <Box w='95%'>
          <Text align='center' fontSize='lg' fontWeight='thin'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis excepturi, suscipit modi, aliquam fuga nam a fugiat odit nostrum nulla! Fuga, quod iure praesentium a voluptas nisi ducimus nesciunt?"</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default OverUnderWatcher;