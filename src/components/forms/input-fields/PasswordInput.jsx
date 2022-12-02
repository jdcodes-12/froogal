import { useState } from 'react';

import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const PasswordInput = ({
  name = "",
  size = "",
  onChange = () => null,
  onBlur = () => null,
  placeholder = "Enter Password"
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const btnBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const btnColor = useColorModeValue('brand.white.base', 'brand.darkmode.primary.base')
  return (
    <InputGroup size='md'>
      <Input
        name={name}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
        onBlur={onBlur}
      />
      <InputRightElement h='full' width='4.5rem'>
        <Button
          h='1.75rem'
          size='sm'
          onClick={handleClick}
          bg={btnBg}
          color={btnColor}
          variant='ghost'>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;