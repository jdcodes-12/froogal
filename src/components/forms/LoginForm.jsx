import { React, useState } from 'react';

import CardContainer from '../containers-ui/card-body-container';
import PasswordInput from '../forms/input-fields/PasswordInput';

import { FaArrowRight } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setAuth((prev) => ({ 
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const authSubmission = () => {
    navigate('/dashboard', { state: auth })
  };

  return (
    <CardContainer>
       <Heading pb={8} textAlign='center'>Log In To Froogal</Heading>
        <Flex p={8} direction='column'>
          <Flex pt={4} pb={12} direction='column' gap={8}>
            <Flex gap={4} direction='column' justify='fill'>
              <FormControl isRequired>
                <FormLabel>Email:</FormLabel>
                <Input name="email" type='text' placeholder='BigMoneyMillionaire@email.com' size='lg' onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <PasswordInput name="password" size='lg' onChange={handleChange} placeholder="Enter Password" />
              </FormControl>
            </Flex>
          </Flex>
        </Flex>

        <Box p={8} align='center'>
          <Button p={6} w='100%' rightIcon={<FaArrowRight />} colorScheme='purple' variant='outline' onClick={authSubmission}>
            <Text fontSize={24}>Login</Text>
          </Button>
        </Box>
    </CardContainer>
  );
}

export default LoginForm;