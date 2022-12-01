import ExpenseItem from '../items/ExpenseItem';
import TileModalContainer  from '../../modals/TileModalContainer';
import ExpenseItemModalBody from '../../modals/modal-bodies/expense-bodies/ExpenseItemModalBody';

const ExpenseItemTile = ({ index, width, expense }) => {
  console.log(expense);
  return (
    <>
      <TileModalContainer 
        key={index}
        colorScheme='purple' 
        modalTitle='Expense Info' 
        modalBody={<ExpenseItemModalBody expense={expense} />}>
        <ExpenseItem expense={expense} width={width} />
      </TileModalContainer>
    </>
  );
}

export default ExpenseItemTile;