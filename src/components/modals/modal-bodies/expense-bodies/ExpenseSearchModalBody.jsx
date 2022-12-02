import { useState, useEffect, useContext } from 'react';
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
  { id: 1, expenseDueDate: '10/24/22', expenseName: 'Netflix', expensePrice: 14.99, status: 'pending' },
  { id: 2, expenseDueDate: '10/25/22', expenseName: 'TradingView', expensePrice: 14.99, status: 'unpaid' },
  { id: 3, expenseDueDate: '10/26/22', expenseName: 'LeetCode', expensePrice: 34.99, status: 'pending' },
];

const ExpenseSearchModalBody = (expenses = []) => {
  const [searchField, setSearchField] = useState('');
  const [userExpensesList, setUserExpensesList] = useState(userExpenseCollection);
  const [filteredExpenses, setFilteredExpenses] = useState(userExpensesList);

  // useEffect(() => {
  // const getReceiptsFromDB = async () => {
  //   const receipts = await getReceipts(currentUser.id);
  //   console.log(receipts);
  //   setUserReceipts(receipts);
  // }
  // getReceiptsFromDB();
  //   setUserExpensesList(userExpenseCollection);
  // }, []);

  useEffect(() => {
    const newFilteredList = userExpensesList.filter((expense) => {
      return expense.expenseName.toLowerCase().includes(searchField);
    });

    setFilteredExpenses(newFilteredList);
  }, [searchField, userExpensesList]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <Flex direction='column' justify='left' px='8px'>
      <FormControl my='16px'>
        <InputGroup>
          <InputLeftElement children={<FiSearch size='22px' />} />
          <Input placeholder='Search an expense to view' variant='filled' borderRadius='xl' fontSize='xl' onChange={onSearchChange} />
        </InputGroup>
      </FormControl>
      <ItemListTile listType='expense' collection={filteredExpenses} />
    </Flex>
  );
}

export default ExpenseSearchModalBody;