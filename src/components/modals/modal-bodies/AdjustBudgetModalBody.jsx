import React from 'react';

import  { FormControl,
          FormLabel,
          NumberInput,
          NumberInputField,
          NumberInputStepper,
          NumberIncrementStepper,
          NumberDecrementStepper,
        } from '@chakra-ui/react';

const AdjustBudgetModalBody = () => {
  // Need to figure out how to get state here
  return (
    <FormControl isRequired>
      <FormLabel>New Budget</FormLabel>
      <NumberInput defaultValue={1575.00} precision={2} step={.50}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}

export default AdjustBudgetModalBody;