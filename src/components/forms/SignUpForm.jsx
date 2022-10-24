import { React, useState } from 'react';

import PasswordInput from '../forms/input-fields/PasswordInput';
import { useNavigate } from 'react-router-dom';

import { addUser } from '../../utils/functions/addUser';

import { FaArrowRight } from 'react-icons/fa';

import { Box,
         Flex,
         FormControl,
         FormLabel,
         FormHelperText,
         FormErrorMessage,
         Center,
         Divider,
         Input,
         Text,
         Heading,
         Button,
         Highlight,
       } from '@chakra-ui/react';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    password: ""
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const userSubmission = () => { 
      // const { message } = addUser(user);
      const message = "";
      if (!message) {
        navigate('/dashboard', { state: user });
      }
  };

  return (
    <Box py={8} 
         bgColor='whiteAlpha.600'
         border='1px' 
         borderColor='gray.200'
         borderRadius='2xl'
         boxShadow='xl'
         >
      <Heading pb={4} textAlign='center'>Create A Froogal Account</Heading>
      <Flex p={4} direction='column'>
        <Flex pt={4} pb={8} direction='column' gap={8}>
          <Flex gap={4}>
            <FormControl isRequired>
              <FormLabel>First Name:</FormLabel>
              <Input name="firstName" type='text' placeholder='John' size='lg' onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name:</FormLabel>
              <Input name="lastName" type='text' placeholder='Doe' size='lg' onChange={handleChange} />
            </FormControl>
          </Flex>

          <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input name="email" type='email' placeholder='FutureMillionaire@froogal.com' size='lg' onChange={handleChange}/>
              <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Flex>

        <Flex pb={4} direction='column' gap={8}>
          <Box px={8} py={4}>
            <Text fontStyle='normal' fontWeight='medium'>
              <Highlight query={['6 characters long', 'one capital letter', 'one symbol']}
                         styles={{ px: '2', py: '1', rounded: 'sm', bg: 'purple.300' }}
                         >
                Password must be at least 6 characters long, contain at least one capital letter, and at least one symbol (!, ?, _)
              </Highlight>
            </Text>
          </Box>
          
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput name="password" size='lg' onChange={handleChange}/>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <PasswordInput placeholder="Confirm Password" size='lg'/>
          </FormControl>
        </Flex>
      </Flex>

      <Box p={8} align='center'>
        <Button 
          p={6} 
          w='100%' 
          rightIcon={<FaArrowRight />} 
          colorScheme='purple' 
          variant='outline' 
          onClick={userSubmission}>
          <Text fontSize={24}>Sign Up Now</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;