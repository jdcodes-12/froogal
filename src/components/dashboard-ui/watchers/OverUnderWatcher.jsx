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


       const quotes = [
        "Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one. --Benjamin Franklin",
        "Empty pockets never held anyone back. Only empty heads and empty hearts can do that. --Norman Vincent Peale",
        "The real measure of your wealth is how much you'd be worth if you lost all your money. --Anonymous",
        "Wealth is not his that has it, but his that enjoys it. --Benjamin Franklin",
        "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind. --T.T. Munger",
        "If you want to be financially free, you need to become a different person than you are today and let go of whatever has held you back in the past. -- Robert Kiyosaki",
        "It’s better to look ahead and prepare than to look back and regret. -- Jackie Joyner-Kersee"
       ];
      

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
          <Text align='center' fontSize='lg' fontWeight='thin'>{quotes[Math.floor(Math.random() * quotes.length)]}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default OverUnderWatcher;