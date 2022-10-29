import { React, useState, useEffect, useMemo } from 'react';
import { getQuotes } from '../../../utils/functions/getQuotes';

import { Box,
         Flex,
         Heading,
         Text,
         Badge,
         Center,
         Stat,
         StatArrow,
         useColorModeValue,
       } from '@chakra-ui/react';

const OverUnderWatcher = () => {
  const [quotes, setQuotes] = useState([]);
  const fetchQuotes = async () => {
    const data = await getQuotes(); 
    setQuotes(data)
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

 const randomQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, [quotes]);

  // Light & Dark mode values, respectively
  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base','brand.darkmode.gray.700');
  const arrowColor = useColorModeValue('brand.lightmode.success.500', 'brand.darkmode.success.300');
  
  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>You are...</Heading>
        <Badge fontSize='xl' 
               bg={badgeBg}
               color={badgeColor}
               py='2px' 
               px='16px' 
               rounded='sm'
          >
            <Center>Weekly</Center>
          </Badge>
      </Flex>
      <Flex justify='center' align='center' px='8px' py='32px'>
        <Box>
          <Stat>
            <StatArrow boxSize={12} type='increase' size='lg' color={arrowColor} />
          </Stat>
        </Box>
        <Text ml='8px' fontSize='4xl' fontWeight='medium'>Over</Text>
      </Flex>
      <Flex justify='center' align='center' mt='16px'>
        <Box w='95%'>
          <Text align='center' fontSize='lg' fontWeight='thin'>{`${randomQuote?.quote || "Fetching Quote"} -- ${randomQuote?.author || "Fetching Author"}`}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default OverUnderWatcher;