import React from 'react';

import ExpenseItem from '../items/ExpenseItem';
import TileModalContainer  from '../../modals/TileModalContainer';

const ExpenseItemTile = ({ width }) => {
  return (
    <>
      <TileModalContainer colorScheme='purple' modalTitle='Expense Info'>
        <ExpenseItem width={width} />
      </TileModalContainer>
    </>
  );
}

export default ExpenseItemTile;