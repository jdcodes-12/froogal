import ButtonModalContainer from '../ButtonModalContainer';
import ReceiptSearchModalBody from '../modal-bodies/receipt-bodies/ReceiptSearchModalBody';

const ReceiptListModal = ({
  receipts = [],
  shadow
}) => {
  return (
    <ButtonModalContainer
      btnVariant='outline'
      btnSize='lg'
      btnFontSize='xl'
      btnText='View Receipts'
      modalTitle='My Receipts'
      modalBody={<ReceiptSearchModalBody receipts={receipts} />}
      modalSize='lg'
      modalPrimaryBtnText='Select Receipt'
      hasCancelBtn={false}
      hasPrimaryBtn={false}
      shadow={shadow}
    />
  );
}

export default ReceiptListModal;