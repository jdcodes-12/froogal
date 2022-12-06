import ItemTileContainer from '../../containers-ui/ItemTileContainer';
import ExpenseItemBodyLayout from '../layouts/bodies/ExpenseItemBodyLayout';

const ExpenseItem = ({ width, expense }) => {
  return (
    <ItemTileContainer width={width} shouldHover={true} boxShadow='inner'>
      <ExpenseItemBodyLayout expense={expense} />
    </ItemTileContainer>
  );
}

export default ExpenseItem;