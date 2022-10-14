import React from 'react';
import { Box } from '@chakra-ui/react';

const ItemTileContainer = ({children, height, width}) => { 
  return (
    <Box py={8} 
    bgColor='whiteAlpha.600'
    border='1px' 
    borderColor='gray.200'
    borderRadius='2xl'
    boxShadow='inner'
    h={height}
    w={width}
    _hover={{
      boxShadow: 'md',
      transform: 'translate(4px, -2px)',
    }}
    >
      { children }
    </Box>
  );
}

export default ItemTileContainer;