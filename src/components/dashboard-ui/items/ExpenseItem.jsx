import ItemTileContainer from '../../containers-ui/ItemTileContainer';
import ExpenseItemBodyLayout from '../layouts/bodies/ExpenseItemBodyLayout';

const ExpenseItem = ({ width }) => {
  return (
    <ItemTileContainer width={width} shouldHover={true} boxShadow='inner'>
      <ExpenseItemBodyLayout />
    </ItemTileContainer>
  );
}

export default ExpenseItem;