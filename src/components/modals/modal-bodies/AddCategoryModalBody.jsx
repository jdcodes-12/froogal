import { React, useState, useEffect } from 'react';

import  { FormControl,
          FormLabel,
          FormHelperText,
          FormErrorMessage,
          Input,
        } from '@chakra-ui/react';

const AddCategoryModalBody = ({
  onChange = () => null,
  isDisabled = () => null,
}) => {
  const [input, setInput] = useState('');
  const isError = input === '';

  const onChangeHandler = (e) => {
    onChange(e);
    setInput(e.target.value);
  };

  useEffect(() => {
    isDisabled(isError);
  }, [isError])

  return (
    <FormControl isRequired isInvalid={isError}>
      <FormLabel>New Category</FormLabel>
      <Input 
        placeholder='Savings' 
        name='name'
        onChange={onChangeHandler} 
        fontSize='xl'
        size='lg'
        variant='flushed'/>
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