import React from 'react';

import ExpenseItem from '../items/ExpenseItem';
import ExpenseTileModal  from '../../modals/ExpenseTileModal';

const ExpenseItemTile = ({ width }) => {
  return (
    <>
      <ExpenseTileModal colorScheme='purple'>
        <ExpenseItem width={width} />
      </ExpenseTileModal>
    </>
  );
}

export default ExpenseItemTile;