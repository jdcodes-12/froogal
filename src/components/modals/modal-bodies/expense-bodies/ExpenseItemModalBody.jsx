import { FiPlus } from 'react-icons/fi';
import {
  Flex,
  Spacer,
  Box,
  Text,
  Badge,
  Stat,
  StatNumber,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

const ExpenseItemModalBody = ({
  expense = null,
}) => {

  return (
    <Flex direction='column' justify='start' gap='32px'>
      <Flex w='full' align='center' justify='space-between'>
        <Text fontSize='2xl' fontWeight='normal'>Your Expenses</Text>
        <Badge fontSize='xl'
          variant='subtle'
          colorScheme='purple'
        >
          Due Date
        </Badge>
      </Flex>
      <Flex w='full'
        align='center'
        justify='space-between'
      >
        <Text fontSize='2xl'
          borderBottom='1px'
          borderColor='purple.300'>
          Status:
        </Text>
        <Text fontSize='2xl'>
          Pending
        </Text>
      </Flex>
      <Flex w='full'
        align='center'
        justify='space-between'
      >
        <Text fontSize='2xl'
          borderBottom='1px'
          borderColor='purple.300'>
          Price:
        </Text>
        <Box>
          <Stat>
            <StatNumber>$14.97</StatNumber>
          </Stat>
        </Box>
      </Flex>
      <Spacer />
      <Flex direction='column' justify='start' align='start'>
        <Text fontSize='2xl' borderBottom='1px' borderColor='purple.300'>Tags:</Text>
        <Flex justify='start' align='end' gap='8px' pt='24px'>
          <Tag px='8px'
            py='12px'
            colorScheme='purple'
            fontSize='md'
            rounded='full'
            fontWeight='semibold'
            variant='outline'>
            <TagLabel>Category</TagLabel>
          </Tag>
          <Tag px='8px'
            py='12px'
            colorScheme='purple'
            fontSize='md'
            rounded='full'
            fontWeight='semibold'
            variant='outline'>
            <TagLabel>Custom</TagLabel>
          </Tag>
          <Tag px='8px'
            py='12px'
            colorScheme='teal'
            fontSize='md'
            rounded='full'
            fontWeight='semibold'
            variant='outline'>
            <TagLabel as={FiPlus} fontSize='md' />
          </Tag>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ExpenseItemModalBody;