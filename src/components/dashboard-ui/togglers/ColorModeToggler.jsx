import React from 'react';

import { useColorMode } from '@chakra-ui/color-mode';

import { Button, 
         Flex,
         Text } from '@chakra-ui/react';

import { FiSun, FiMoon } from 'react-icons/fi';

const ColorModeToggler = () => {
  const  { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify='space-between' 
            align='center'>
        <Text fontSize='xl'
              fontWeight='bold'
        >
             Go {colorMode == 'light' ? 'Dark.' : 'Light.'} 
        </Text>
        <Button onClick={toggleColorMode}
                p='4px'
                size='lg'
                variant='outline'
        >
          {colorMode == 'light' ? <FiMoon /> : <FiSun />}
        </Button>
      </Flex>
  );
}

export default ColorModeToggler;