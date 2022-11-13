import { useColorMode } from '@chakra-ui/color-mode';

import { Button, 
         Flex,
         Text } from '@chakra-ui/react';

import { FiSun, FiMoon } from 'react-icons/fi';

const ColorModeToggler = ({ route = 'dashboard' }) => {
  const  { colorMode, toggleColorMode } = useColorMode();

  return (
    route  == '/' ? 
    <Flex justify={['space-between', 'space-between', 'space-between', 'end']}
          align='center'
    >
        <Text fontSize='xl'
              fontWeight='bold'
             
        >
             Go {colorMode == 'light' ? 'Dark.' : 'Light.'} 
        </Text>
        <Button onClick={toggleColorMode}
                p='4px'
                size='lg'
                variant='outline'
                ml={[0, '32px', '64px', '128px']}
        >
          {colorMode == 'light' ? <FiMoon /> : <FiSun />}
        </Button>
      </Flex> 
    :
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