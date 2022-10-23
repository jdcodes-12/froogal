import React from 'react';

import ReceiptItem from '../items/ReceiptItem';
import TileModalContainer from '../../modals/TileModalContainer';
import ReceiptItemModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptItemModalBody';

const ReceiptItemTile = ({ width }) => {
  return (
    <>
      <TileModalContainer colorScheme='purple' 
                          modalTitle='Receipt Info' 
                          modalBody={<ReceiptItemModalBody />} 
                          modalPrimaryBtnText='close'
                          >
        <ReceiptItem width={width} />
      </TileModalContainer>
    </>
  );
}

export default ReceiptItemTile;