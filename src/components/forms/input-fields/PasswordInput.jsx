import React from 'react';
import { useState } from 'react';

import {  InputGroup,
          Input,
          InputRightElement,
          Button,
       } from '@chakra-ui/react';
const PasswordInput = ({size}) =>  {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        size={size}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;