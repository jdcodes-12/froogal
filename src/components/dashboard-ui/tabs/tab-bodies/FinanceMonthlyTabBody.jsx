import React from 'react';

import { MdOutlineSavings, MdOutlineMonetizationOn } from 'react-icons/md';

import  { FormControl,
          FormLabel,
          InputGroup,
          NumberInput,
          NumberInputField,
          NumberInputStepper,
          NumberIncrementStepper,
          NumberDecrementStepper,
          Flex,
        } from '@chakra-ui/react';
        
const FinanceMonthlyTabBody = () => {
    
  return (
    <>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Monthly Budget</FormLabel>
        <Flex justify='left' align='center'>
          <MdOutlineSavings fontSize='36px' />
          <InputGroup size='lg' variant='flushed' ml='16px'>
            <NumberInput defaultValue={2000.00} precision={2} step={.50} w='full'>
            <NumberInputField fontSize='2xl' 
                              fontWeight='medium'
                              textAlign='center' />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          </InputGroup>
        </Flex>
      </FormControl>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Monthly Income</FormLabel>
        <Flex justify='left' align='center'>
          <MdOutlineMonetizationOn fontSize='36px' />
          <InputGroup size='lg' variant='flushed' ml='16px'>
            <NumberInput defaultValue={2000.00} precision={2} step={.50} w='full'>
            <NumberInputField fontSize='2xl' 
                              fontWeight='medium'
                              textAlign='center' />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          </InputGroup>
        </Flex>
      </FormControl>
    </>
  );
}

export default FinanceMonthlyTabBody;