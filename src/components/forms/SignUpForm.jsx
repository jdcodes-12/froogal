import { useState, useContext } from 'react';
import CardContainer from '../containers-ui/CardBodyContainer';
import PasswordInput from '../forms/input-fields/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../utils/database-functions/addUser';
import { FaArrowRight } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { AuthContext } from '../context/authContext';
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
import { AUTH_ACTION_TYPES } from '../actionTypes/actionTypes';
import { hash } from 'bcryptjs';

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailAuthError, setEmailAuthError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    setEmailError(false);
    setConfirmError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setEmailAuthError(false);
    setPasswordError(false);
    setUser((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const nameRegEx = new RegExp(/(.*[a-z]){2}/i);
  const emailRegEx = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  const passwordRegEx = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

  const firstNamePass = nameRegEx.test(user.firstName);
  const lastNamePass = nameRegEx.test(user.lastName);
  const emailPass = emailRegEx.test(user.email);
  const passwordPass = passwordRegEx.test(user.password);

  const { dispatch } = useContext(AuthContext);

  const userSubmission = async (e) => {
    e.preventDefault()

    if (!firstNamePass) {
      setFirstNameError(!firstNamePass);
    }

    if (!lastNamePass) {
      setLastNameError(!lastNamePass);
    }

    if (!emailPass) {
      setEmailError(!emailPass);
    }

    if (!passwordPass) {
      setPasswordError(!passwordPass);
    }

    if (firstNamePass && lastNamePass && emailPass && passwordPass) {
      try {
        const hashedPassword = await hash(user.password, 10);

        const createRes = await createUserWithEmailAndPassword(auth, user.email, hashedPassword)
        delete user?.confirmPassword
        await addUser({ ...user, password: hashedPassword }, createRes.user.uid);
        const signInRes = await signInWithEmailAndPassword(auth, user.email, hashedPassword)
        dispatch({
          type: AUTH_ACTION_TYPES.LOGIN,
          payload: signInRes.user
        });
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
        setEmailAuthError(true);
      }
    }
  };

  // const hbg = useColorModeValue('brand.lightmode.accent.base', 'brand.darkmode.accent.base');
  // const { colorMode } = useColorMode();

  const buttonDisabled = emailAuthError || emailError || firstNameError || lastNameError
    || passwordError || confirmError;

  return (
    <CardContainer >
      <Heading pb={4} textAlign='center'>Create A Froogal Account</Heading>
      <Flex p={4} direction='column'>
        <Flex pt={4} pb={8} direction='column' gap={8}>
          <FormControl isRequired>
            <FormLabel>First Name:</FormLabel>
            <Input
              name="firstName"
              type='text'
              placeholder='John'
              size='lg'
              onChange={handleChange} />
          </FormControl>
          <Text fontSize='lg' ml='20px' fontWeight='bold' color='#FF3500' hidden={!firstNameError} >First name must be at least 2 characters</Text>

          <FormControl isRequired>
            <FormLabel>Last Name:</FormLabel>
            <Input
              name="lastName"
              type='text'
              placeholder='Doe'
              size='lg'
              onChange={handleChange} />
          </FormControl>
          <Text fontSize='lg' ml='20px' fontWeight='bold' color='#FF3500' hidden={!lastNameError} >Last name must be at least 2 characters</Text>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type='email'
              placeholder='FutureMillionaire@froogal.com'
              size='lg'
              onChange={handleChange} />
          </FormControl>
          <Text fontSize='lg' ml='20px' fontWeight='bold' color='#FF3500' hidden={!emailAuthError && !emailError} >
            {emailAuthError ? 'Email Already Taken' : 'Must be valid email address!'} </Text>
        </Flex>

        <Flex pb={4} direction='column' gap={8}>
          {/* <Box px={8} py={4}>
            <Text fontStyle='normal' fontWeight='medium' lineHeight={2}>
              <Highlight query={['6 characters long', 'one capital letter', 'one symbol']}
                         styles={{ px: '2', 
                                   py: '0.5', 
                                   rounded: 'md', 
                                   bg: colorMode === 'light' ? 'brand.lightmode.accent.200' : 'brand.darkmode.accent.base'}}
                         >
                Password must be at least 6 characters long, contain at least one capital letter, and at least one symbol (!, ?, _)
              </Highlight>
            </Text>
          </Box> */}

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput name="password" size='lg' onChange={handleChange} />
          </FormControl>
          <Text
            fontSize='lg'
            ml='20px'
            fontWeight='bold'
            color='#FF3500'
            hidden={!passwordError} >
              Passwords must be atleast 6 to atmost 20 characters long, contain atleast one capital letter, contain atleast one number 
              and at least one special symbol
          </Text>

          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={() => {
                if (user.password !== user.confirmPassword) {
                  setConfirmError(true);
                }
              }}
              size='lg' />
          </FormControl>
          <Text ml='20px' fontSize='lg' fontWeight='bold' color='#FF3500' hidden={!confirmError} >Passwords do not match!</Text>
        </Flex>
      </Flex>

      <Box p={8} align='center'>
        <Button
          p={6}
          w='100%'
          rightIcon={<FaArrowRight />}
          colorScheme='purple'
          variant='outline'
          onClick={userSubmission}
          disabled={buttonDisabled} >
          <Text fontSize={24}>Sign Up Now</Text>
        </Button>
      </Box>
    </CardContainer>
  );
}

export default SignUpForm;