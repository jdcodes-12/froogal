import React from 'react'

import RegistrationForm from '../components/forms/RegistrationForm';
import SignUpForm from '../components/forms/SignUpForm';

import {  Box,
          Flex,
       } from '@chakra-ui/react';

const LoginAndRegistrationRoute = () => {
  return (
    <Box>
      <Flex border='2px' 
            align='center' 
            justify='center' 
            gap={4}
            py={8}
            >
        <Box w='container.sm'>
          <RegistrationForm />
        </Box>
        <Box w='container.sm'>
          <SignUpForm />
        </Box>
      </Flex>
    </Box>
  );
}

export default LoginAndRegistrationRoute;