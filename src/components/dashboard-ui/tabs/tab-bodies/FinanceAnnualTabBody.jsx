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
} from '@chakra-ui/react';

const FinanceAnnualTabBody = ({
  annualSettings = null,
  onChange = () => null
}) => {

  const handleChange = (name) => (value) => {
    onChange({ [name]: parseFloat(value) });
  }

  return (
    <>
      <FormControl>
        <FormLabel fontSize='2xl' fontWeight='medium'>Annual Budget</FormLabel>
        <Flex justify='left' align='center'>
          <MdOutlineSavings fontSize='36px' />
          <InputGroup size='lg' variant='flushed' ml='16px'>
            <NumberInput onChange={handleChange('annualBudget')} value={annualSettings?.annualBudget} defaultValue={2000.00} precision={2} step={.50} min={0} w='full'>
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
        <FormLabel fontSize='2xl' fontWeight='medium'>Annual Income</FormLabel>
        <Flex justify='left' align='center'>
          <MdOutlineMonetizationOn fontSize='36px' />
          <InputGroup size='lg' variant='flushed' ml='16px'>
            <NumberInput onChange={handleChange('annualIncome')} value={annualSettings?.annualIncome} defaultValue={2000.00} precision={2} step={.50} min={0} w='full'>
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

export default FinanceAnnualTabBody;