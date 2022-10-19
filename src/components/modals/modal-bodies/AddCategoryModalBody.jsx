import React, {useState} from 'react';

import  { FormControl,
          FormLabel,
          FormHelperText,
          FormErrorMessage,
          Input,
        } from '@chakra-ui/react';

const AddCategoryModalBody = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <FormControl isRequired isInvalid={isError}>
      <FormLabel>New Category</FormLabel>
      <Input placeholder='Savings'
             value={input} 
             onChange={handleInputChange} />
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

export default AddCategoryModalBody;