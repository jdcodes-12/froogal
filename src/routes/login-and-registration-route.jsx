import React from 'react'
import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import ColorModeToggler from '../components/dashboard-ui/togglers/ColorModeToggler';

import { 
  Box, 
  Flex, 
  useColorMode, 
  useColorModeValue, 
} from '@chakra-ui/react';

const LoginAndRegistrationRoute = () => {
 
  const bg = useColorModeValue('brand.lightmode.primary.base', 'brand.darkmode.primary.base');
  
  return (
    <Flex h='100vh' justify='center' align='center' bg={bg}>
      <Flex gap={4} py={8}>
        <Box w='container.sm'>
          <LoginForm />
        </Box>
        <Box w='container.sm' >
          <SignUpForm />
        </Box>
        <ColorModeToggler />
      </Flex>
    </Flex>
  );
}

export default LoginAndRegistrationRoute;