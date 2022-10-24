import React from 'react';
import { useState } from 'react';

import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

const PasswordInput = ({
  name = "",
  size = "",
  onChange = () => null,
  placeholder = "Enter Password"
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        name={name}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
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