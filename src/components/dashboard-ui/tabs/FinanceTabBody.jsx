import React from 'react';

import { FiMail, FiUser, FiImage } from 'react-icons/fi';

import  { Flex,
          FormControl,
          FormLabel,
          InputGroup,
          InputLeftAddon,
          Input,
        } from '@chakra-ui/react';
const FinanceTabBody = () => {
  return (
    <Flex direction='column' justify='start' gap='48px' mt='32px'>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>First Name</FormLabel>
        <InputGroup size='lg' variant='flushed'>
          <InputLeftAddon children={<FiUser size='32px' />} pr='16px'/>
          <Input type='text' placeholder='BigMoney'/>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Last Name</FormLabel>
        <InputGroup size='lg' variant='flushed'>
          <InputLeftAddon children={<FiUser size='32px' />} pr='16px'/>
          <Input type='text' placeholder='Millionaire'/>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Avatar</FormLabel>
        <InputGroup size='lg' variant='flushed'>
          <InputLeftAddon children={<FiImage size='32px' />} pr='16px'/>
          <Input placeholder='Drag and drop your .png or .jpg file here'/>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Email</FormLabel>
        <InputGroup size='lg' variant='flushed'>
          <InputLeftAddon children={<FiMail size='32px' />} pr='16px'/>
          <Input type='email' placeholder='BigMoneyMillionaire@froogal.com'/>
        </InputGroup>
      </FormControl>
    </Flex>
  );
}

export default FinanceTabBody;