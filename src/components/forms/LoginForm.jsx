import { useState, useContext, useEffect } from 'react';
import CardContainer from '../containers-ui/CardBodyContainer';
import PasswordInput from '../forms/input-fields/PasswordInput';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getUserPassword } from '../../utils/database-functions/getUserPassword';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase/index';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import { AuthContext } from '../context/authContext';
import { AUTH_ACTION_TYPES } from '../../actionTypes';
import { compare } from 'bcryptjs';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setLogin((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const { dispatch } = useContext(AuthContext);

  const authSubmission = async (e) => {
    e.preventDefault();
    try {
      const userRes = await getUserPassword(login.email);
      if (userRes?.error) {
        setError(true);
        console.log(userRes?.message);
      }
      const passwordCorrect = await compare(login.password, userRes?.[0]?.password);
      if (!passwordCorrect && login.password !== userRes?.[0]?.password) {
        setError(true);
        return;
      }
      const res = await signInWithEmailAndPassword(auth, login.email, userRes[0]?.password);
      dispatch({
        type: AUTH_ACTION_TYPES.LOGIN,
        payload: res.user
      });
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setError(true);
    };
  };

  return (
    <CardContainer>
      <Heading pb={8} textAlign='center'>Log In To Froogal</Heading>
      <Flex p={8} direction='column'>
        <Flex pt={4} direction='column' gap={8}>
          <Flex gap={4} alignItems='center' direction='column'>
            <FormControl isRequired>
              <FormLabel>Email:</FormLabel>
              <Input name='email' type='text' placeholder='BigMoneyMillionaire@email.com' size='lg' onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <PasswordInput name='password' size='lg' onChange={handleChange} placeholder='Enter Password' />
            </FormControl>
            <Text pt={8} fontSize='2xl' fontWeight='bold' color='red' hidden={!error} >Wrong Email or Password</Text>
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