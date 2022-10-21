import React from 'react';

import ReceiptItem from '../items/ReceiptItem';
import ReceiptTileModal from '../../modals/ReceiptTileModal';

const ReceiptItemTile = ({ width }) => {
  return (
    <>
      <ReceiptTileModal colorScheme='purple'>
        <ReceiptItem width={width} />
      </ReceiptTileModal>
    </>
  );
}

export default ReceiptItemTile;