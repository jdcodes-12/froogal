import React from 'react';

import ButtonModalContainer from '../ButtonModalContainer';
import ReceiptSearchModalBody from '../modal-bodies/receipt-bodies/ReceiptSearchModalBody';

const ReceiptListModal = () => {
  return (
    <ButtonModalContainer colorScheme='purple' 
                          btnVariant='outline'
                          btnSize='lg'
                          btnFontSize='xl'
                          btnText='View Receipts' 
                          modalBody={<ReceiptSearchModalBody />} 
                          modalSize='lg' 
                          modalPrimaryBtnText='Select Receipt'
                          hasCancelBtn={false} 
                          hasPrimaryBtn={false}/>
  );
}

export default ReceiptListModal;