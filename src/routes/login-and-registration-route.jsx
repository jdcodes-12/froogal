import React from 'react'

import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';

import {  Box,
          Flex,
       } from '@chakra-ui/react';

const LoginAndRegistrationRoute = () => {
  return (
    <Box>
      <Flex align='center' 
            justify='center' 
            gap={4}
            py={8}
            >
        <Box w='container.sm'>
          <LoginForm />
        </Box>
        <Box w='container.sm'>
          <SignUpForm />
        </Box>
      </Flex>
    </Box>
  );
}

export default LoginAndRegistrationRoute;