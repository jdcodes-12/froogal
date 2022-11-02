import React from 'react';

import ButtonModalContainer from '../ButtonModalContainer';
import ExpenseSearchModalBody from '../modal-bodies/expense-bodies/ExpenseSearchModalBody';

const ExpenseListModal = () => {

  return (
    <ButtonModalContainer colorScheme='purple' 
                          btnVariant='outline'
                          btnSize='lg'
                          btnFontSize='xl'
                          btnText='View Expenses' 
                          modalBody={<ExpenseSearchModalBody />} 
                          modalSize='lg' 
                          hasCancelBtn={false} 
                          hasPrimaryBtn={false}/>
  );
}

export default ExpenseListModal;