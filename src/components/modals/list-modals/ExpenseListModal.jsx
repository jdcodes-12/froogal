import ButtonModalContainer from '../ButtonModalContainer';
import ExpenseSearchModalBody from '../modal-bodies/expense-bodies/ExpenseSearchModalBody';

const ExpenseListModal = ({ expenses = [], shadow }) => {

  return (
    <ButtonModalContainer 
      colorScheme='purple' 
      btnVariant='outline'
      btnSize='lg'
      btnFontSize='xl'
      btnText='View Expenses'
      modalTitle='My Expenses'
      modalBody={<ExpenseSearchModalBody expenses={expenses} />} 
      modalSize='lg' 
      hasCancelBtn={false} 
      hasPrimaryBtn={false}
      shadow={shadow} />
  );
}

export default ExpenseListModal;