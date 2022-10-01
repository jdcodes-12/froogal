import React from 'react';

import CardContainer from '../containers-ui/card-body-container';
import PasswordInput from '../forms/input-fields/PasswordInput';

import { FaArrowRight } from 'react-icons/fa';

import {  Box,
          Flex,
          FormControl,
          FormLabel,
          FormHelperText,
          FormErrorMessage,
          Input,
          Text,
          Heading,
          Button,
        } from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <CardContainer>
       <Heading pb={8} textAlign='center'>Create A Profile</Heading>
        <Flex p={8} direction='column'>
          <Flex pt={4} pb={12} direction='column' gap={8}>
            <Flex gap={4} direction='column' justify='fill'>
              <FormControl isRequired>
                <FormLabel>Username:</FormLabel>
                <Input type='text' placeholder='BigMoneyMillionaire' size='lg'/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <PasswordInput size='lg'/>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>

        <Box p={8} align='center'>
          <Button p={6} w='100%' rightIcon={<FaArrowRight />} colorScheme='purple' variant='outline'>
            <Text fontSize={24}>Login</Text>
          </Button>
        </Box>
    </CardContainer>
  );
}

export default LoginForm;