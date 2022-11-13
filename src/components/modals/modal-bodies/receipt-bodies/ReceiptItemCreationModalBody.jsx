import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export const ReceiptItemCreationModalBody = ({
  onChange = () => null,
  onNumberInputChange = () => null,
}) => {

  return (
    <Flex direction='column' justify='start' align='start' px='8px'>
      <Flex direction='column' w='full' gap='16px'>
        <FormControl isRequired>
          <FormLabel>Name: </FormLabel>
          <Input name="name" onChange={onChange} placeholder='Rolex' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Price: </FormLabel>
          <NumberInput onChange={onNumberInputChange('unitPrice')} defaultValue={0} precision={2} step={.50} min={0} w='full'>
            <NumberInputField fontSize='2xl' fontWeight='medium' />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>quantity: </FormLabel>
          <NumberInput onChange={onNumberInputChange('quantity')} defaultValue={0} step={1} min={0} w='full'>
            <NumberInputField fontSize='2xl' fontWeight='medium'/>
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Flex>
    </Flex>
  );
};