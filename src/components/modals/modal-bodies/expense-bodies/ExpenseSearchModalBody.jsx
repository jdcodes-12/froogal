import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';
import { FiSearch } from 'react-icons/fi';
import { 
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const userExpenseCollection = [
  { expenseDueDate: '10/24/22', expenseName: 'Netflix', expensePrice: 14.99, status: 'pending'},
  { expenseDueDate: '10/25/22', expenseName: 'TradingView', expensePrice: 14.99, status: 'unpaid'},
  { expenseDueDate: '10/26/22', expenseName: 'LeetCode', expensePrice: 34.99, status: 'pending'},
];

const ExpenseSearchModalBody = () => {
  return (
   <Flex direction='column' justify='left' px='8px'>
      <FormControl my='16px'>
        <InputGroup>
          <InputLeftElement children={<FiSearch size='22px' />} />
          <Input placeholder='Search an expense to view' variant='filled' borderRadius='xl' fontSize='xl'/>
        </InputGroup>
      </FormControl>
      <ItemListTile listType='expense' collection={userExpenseCollection} />
   </Flex>
  );
}

export default ExpenseSearchModalBody;