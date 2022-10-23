import React from 'react';

import ReceiptItem from '../items/ReceiptItem';
import TileModalContainer from '../../modals/TileModalContainer';

const ReceiptItemTile = ({ width }) => {
  return (
    <>
      <TileModalContainer colorScheme='purple' modalTitle='Receipt Info'>
        <ReceiptItem width={width} />
      </TileModalContainer>
    </>
  );
}

export default ReceiptItemTile;