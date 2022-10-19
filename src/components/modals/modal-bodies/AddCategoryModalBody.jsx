import React, {useState} from 'react';

import  { FormControl,
          FormLabel,
          FormHelperText,
          FormErrorMessage,
          Input,
        } from '@chakra-ui/react';

const AdjustBudgetModalBody = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Hit cancel if you don't want to save changes.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Input cannot be blank.</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default AdjustBudgetModalBody;