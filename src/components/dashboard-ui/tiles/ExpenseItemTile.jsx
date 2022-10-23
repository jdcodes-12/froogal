import React from 'react';

import ExpenseItem from '../items/ExpenseItem';
import TileModalContainer  from '../../modals/TileModalContainer';
import ExpenseItemModalBody from '../../modals/modal-bodies/expense-bodies/ExpenseItemModalBody';

const ExpenseItemTile = ({ width }) => {
  return (
    <>
      <TileModalContainer colorScheme='purple' 
                          modalTitle='Expense Info' 
                          modalBody={<ExpenseItemModalBody />}
                          >
        <ExpenseItem width={width} />
      </TileModalContainer>
    </>
  );
}

export default ExpenseItemTile;