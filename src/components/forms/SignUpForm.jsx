import { React, useState } from 'react';

import PasswordInput from '../forms/input-fields/PasswordInput';

// import addUser from '../../utils/functions/addUser';

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
  const [user, setUser] = useState({firstName: "", lastName: "", email: "", password: ""});
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
              <Input type='text' placeholder='John' size='lg' onChange={(e) => setUser({...user, firstName: `${e.target.value}`})}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name:</FormLabel>
              <Input type='text' placeholder='Doe' size='lg' onChange={(e) => setUser({...user, lastName: `${e.target.value}`})}/>
            </FormControl>
          </Flex>

          <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='FutureMillionaire@froogal.com' size='lg' onChange={(e) => setUser({...user, email: `${e.target.value}`})}/>
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
            <PasswordInput size='lg' onChange={(e) => setUser({...user, password: `${e.target.value}`})}/>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <PasswordInput placeholder="Confirm Password" size='lg' onChange={() => null}/>
          </FormControl>
        </Flex>
      </Flex>

      <Box p={8} align='center'>
        <Button p={6} w='100%' rightIcon={<FaArrowRight />} colorScheme='purple' variant='outline' onClick={() => console.log({ user })}>
          <Text fontSize={24}>Sign Up Now</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;