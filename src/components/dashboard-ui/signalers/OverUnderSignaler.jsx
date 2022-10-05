import React from 'react';

import  {
          Box,
          Stat,
          StatLabel,
          StatArrow,
          StatHelpText,
          Flex,
          HStack,
        } from '@chakra-ui/react';

const OverUnderSignaler = () => {
  return (
    <Box border='1px' borderColor='purple.200' w='sm'>
      <Flex direction="column">
        <Stat>
          <HStack>
            <StatArrow type="increase" />
            <StatLabel>Under</StatLabel>
          </HStack>
          <StatLabel>“The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.”</StatLabel>
          <StatHelpText>- Robert T. Kiyosaki</StatHelpText>
        </Stat>
      </Flex>
    </Box>
  );
}

export default OverUnderSignaler;