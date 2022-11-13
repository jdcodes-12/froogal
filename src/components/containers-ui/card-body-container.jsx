import { Box, useColorModeValue } from '@chakra-ui/react';

const CardContainer = (props) => {
  let { height, width, children } = props;

  const bg = useColorModeValue('brand.lightmode.primary.base', 'brand.darkmode.gray.600');
  const bc = useColorModeValue('brand.lightmode.primary.base', 'brand.darkmode.gray.700');
  
  return (
    <Box  py={8} 
          bg={bg}
          border='1px' 
          borderColor={bc}
          borderRadius='2xl'
          boxShadow='xl'
          h={height}
          w={width}
    >
      {children }
    </Box>
  );
}

export default CardContainer;