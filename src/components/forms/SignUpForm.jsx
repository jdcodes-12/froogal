import React from 'react';

import PasswordInput from '../forms/input-fields/PasswordInput';

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
  return (
    <Box py={8} 
         bgColor='whiteAlpha.600'
         border='1px' 
         borderColor='gray.200'
         borderRadius='2xl'
         boxShadow='xl'
         >
      <Heading pb={8} textAlign='center'>Create A Profile</Heading>
      <Flex p={8} direction='column'>
        <Flex pt={4} pb={12} direction='column' gap={8}>
          <Flex gap={4}>
            <FormControl isRequired>
              <FormLabel>First Name:</FormLabel>
              <Input type='text' placeholder='John' size='lg'/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name:</FormLabel>
              <Input type='text' placeholder='Doe' size='lg'/>
            </FormControl>
          </Flex>

          <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='FutureMillionaire@froogal.com' size='lg'/>
              <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Flex>

        <Center>
          <Divider w='50%' borderColor='gray.600'/>
        </Center>

        <Flex pt={12} pb={4} direction='column' gap={8}>
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
            <PasswordInput size='lg'/>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' placeholder='Verify Password' size='lg'/>
          </FormControl>
        </Flex>
      </Flex>

      <Box p={8} align='center'>
        <Button p={6} w='100%' rightIcon={<FaArrowRight />} colorScheme='purple' variant='outline'>
          <Text fontSize={24}>Sign Up Now</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;