import React from 'react';

import  { FormControl,
          FormLabel,
          NumberInput,
          NumberInputField,
          NumberInputStepper,
          NumberIncrementStepper,
          NumberDecrementStepper,
        } from '@chakra-ui/react';

const AdjustBudgetModalBody = ({ 
  value = 0,
  onChange = () => null, 
  fieldName = null, 
  mode = '' 
}) => {
  const handleChange = (name) => (value) => {
    onChange({[name]: value});
  }

  return (
    <FormControl isRequired>
      <FormLabel>{`New ${mode} Budget`}</FormLabel>
      <NumberInput onChange={handleChange(fieldName)} value={value ? value : ""} defaultValue={1575.00} precision={2} step={.50} 
                   size='lg' 
                   variant='flushed'>
        <NumberInputField fontSize='2xl'/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}

export default AdjustBudgetModalBody;