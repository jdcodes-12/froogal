import  { useState, useEffect }from 'react';
import { FiCalendar } from 'react-icons/fi';
import { 
  Flex,
  Input,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper
} from '@chakra-ui/react';

const ExpenseCreationModalBody = ({
  onChange = () => null,
  onExpenseCreation = () => null,
}) => {
  const [data, setData] = useState(null);
  const [numState, setNumstate] = useState(0);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
   
  const handleNumberChange = (name) => (value) => {
    setNumstate(value);
    setData((prev) => ({
        ...prev, [name]: value
    }));
  };

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
   <Flex direction='column' justify='start' align='start' px='8px'>
      <Flex direction='column' w='full' gap='16px'>

        <FormControl isRequired>
          <FormLabel>Due Date: </FormLabel>
          <InputGroup>
            <Input name='date' onChange={handleChange} type='date' />
            <InputRightElement children={<FiCalendar color='green.500' />} />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Price: </FormLabel>
          <NumberInput onChange={handleNumberChange('price')} value={numState} min={0} precision={2}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location: </FormLabel>
          <Input name='locationName' onChange={handleChange} placeholder='Location Name' />
        </FormControl>
        <Checkbox>Reoccuring Expense?</Checkbox>  
        </Flex>
    </Flex>
  );
};

export default ExpenseCreationModalBody;