import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const ItemTileContainer = ({hub = false, children, height, width, translateX, 
                            translateY, borderRadius, shouldHover, boxShadow}) => { 

  const bgColor = useColorModeValue('brand.lightmode.primary.base', 'brand.darkmode.gray.600');
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.800');

  return (
    <Box 
      cursor={!hub ? 'pointer' : ''}
      py={8}
      bgColor={bgColor}
      border='1px' 
      borderColor={borderColor}
      borderRadius={ borderRadius ?? '2xl'}
      boxShadow={boxShadow}
      h={height}
      w={width}
      _hover={ shouldHover ? 
                { boxShadow: 'md',
                  transform: 
                    translateX && translateY ? 
                      'translate(' + translateX +'px,' + translateY + 'px)' : 
                      'translate(4px, -2px)'
                } : {}
      }>
      { children }
    </Box>
  );
}

export default ItemTileContainer;