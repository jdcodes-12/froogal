import React from 'react';

import { Box } from '@chakra-ui/react';

const CardContainer = (props) => {
  let { height, width, children } = props;
  return (
    <Box py={8} 
    bgColor='whiteAlpha.600'
    border='1px' 
    borderColor='gray.200'
    borderRadius='2xl'
    boxShadow='xl'
    h={height}
    w={width}
    >
      { children }
    </Box>
  );
}

export default CardContainer;