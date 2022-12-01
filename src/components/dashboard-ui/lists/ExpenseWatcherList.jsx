import ExpenseItemTile from '../tiles/ExpenseItemTile';
import ExpenseCreationModalBody from '../../modals/modal-bodies/expense-bodies/ExpenseCreationModalBody';
import ButtonModalContainer from '../../modals/ButtonModalContainer';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';

const userExpenseCollection = [
  { id: 1, dueDate: '10/24/22', name: 'Netflix', price: 14.99, status: 'pending', isPaid: true},
  { id: 2, dueDate: '10/25/22', name: 'TradingView', price: 14.99, status: 'unpaid', isPaid: true},
  { id: 3, dueDate: '10/26/22', name: 'LeetCode', price: 34.99, status: 'pending', isPaid: false},
];

/*
* The ExpenseWatcherList should only render 
* 5 most recent receipts by default.
* The list should only show 5 ExpenseItemTile.
*/
const ExpenseWatcherList = ({
  expenses = userExpenseCollection,
}) => {
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');
  console.log(expenses);
  return (
    <Box ml='16px'>
      <Heading py='8' fontSize='3xl' align='center'>Expenses</Heading>
      <SimpleGrid columns={2} spacing='10px'>
        { expenses.length > 0
          ? expenses.map((expense, index) => {
            return <ExpenseItemTile key={index} expense={expense} width='95%' />
          })
          : null}
      </SimpleGrid>
      { expenses.length === 0
        ? (
          <Flex direction='column' align='center' justify='center' gap={3}>
            <Box
              border='1px'
              borderColor={borderColor}
              rounded='md'
              w='full'
              textAlign='center'
              shadow='md'
              mb='20px'>
              <Text shadow='inner' fontSize='xl' fontWeight='semibold' p='20px' w='full'>No Expenses Yet</Text>
            </Box>
            <ButtonModalContainer
              btnVariant='solid'
              colorScheme='purple'
              btnText='Create an Expense?'
              modalBody={<ExpenseCreationModalBody />}
              modalTitle='Expense Creation'
              modalSize='xl'
              modalPrimaryBtnText='Save Changes'
              hasCancelBtn
              hasPrimaryBtn
              width='full' />
          </Flex>
        )
        : null }
    </Box>
  );
}

export default ExpenseWatcherList;