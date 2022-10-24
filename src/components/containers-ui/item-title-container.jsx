import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const ItemTileContainer = ({children, height, width, translateX, 
                            translateY, borderRadius, shouldHover}) => { 

  const bg = useColorModeValue('brand.lightmode.primary.base', 'brand.darkmode.gray.600');
  const bc = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.800');

  return (
    <Box py={8} 
    bgColor={bg}
    border='1px' 
    borderColor={bc}
    borderRadius={ borderRadius ?? '2xl'}
    boxShadow='inner'
    h={height}
    w={width}
    _hover={ shouldHover ? 
              { boxShadow: 'md',
                transform: 
                  translateX && translateY ? 
                    'translate(' + translateX +'px,' + translateY + 'px)' : 
                    'translate(4px, -2px)'
              } : {}
    } 
    >
      { children }
    </Box>
  );
}

export default ItemTileContainer;