import React from 'react';

import ButtonModalContainer from '../ButtonModalContainer';
import ReceiptSearchModalBody from '../modal-bodies/receipt-bodies/ReceiptSearchModalBody';

const ReceiptListModal = () => {
  return (
    <ButtonModalContainer btnVariant='outline'
                          btnSize='lg'
                          btnFontSize='xl'
                          btnText='View Receipts'
                          modalTitle='My Receipts'
                          modalBody={<ReceiptSearchModalBody />} 
                          modalSize='lg' 
                          modalPrimaryBtnText='Select Receipt'
                          hasCancelBtn={false} 
                          hasPrimaryBtn={false}/>
  );
}

export default ReceiptListModal;