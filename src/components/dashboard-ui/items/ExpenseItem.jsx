import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';
import ExpenseItemBodyLayout from '../layouts/bodies/ExpenseItemBodyLayout';

const ExpenseItem = ({ width }) => {
  return (
    <ItemTileContainer width={width} shouldHover={true}>
      <ExpenseItemBodyLayout />
    </ItemTileContainer>
  );
}

export default ExpenseItem;