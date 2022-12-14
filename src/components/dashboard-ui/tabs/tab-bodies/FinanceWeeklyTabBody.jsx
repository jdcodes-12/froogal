import { MdOutlineSavings, MdOutlineMonetizationOn } from 'react-icons/md';

import {
  FormControl,
  FormLabel,
  InputGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button,
} from '@chakra-ui/react';

const FinanceWeeklyTabBody = ({
  weeklySettings = null,
  onChange = () => null
}) => {

  const handleChange = (name) => (value) => {
    onChange({ [name]: parseFloat(value) });
  }

  return (
    <>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Weekly Budget</FormLabel>
        <Flex justify='left' align='center'>
          <MdOutlineSavings fontSize='36px' />
          <InputGroup size='lg' variant='flushed' ml='16px'>
            <NumberInput
              onChange={handleChange('weeklyBudget')}
              value={weeklySettings?.weeklyBudget}
              defaultValue={2000.00} precision={2}
              step={.50}
              min={0}
              w='full'>
              <NumberInputField
                fontSize='2xl'
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
        <FormLabel fontSize='2xl' fontWeight='medium'>Weekly Income</FormLabel>
        <Flex justify='left' align='center'>
          <MdOutlineMonetizationOn fontSize='36px' />
          <InputGroup size='lg' variant='flushed' ml='16px'>
            <NumberInput
              onChange={handleChange('weeklyIncome')}
              value={weeklySettings?.weeklyIncome}
              defaultValue={2000.00} precision={2}
              step={.50}
              min={0}
              w='full'>
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

export default FinanceWeeklyTabBody;