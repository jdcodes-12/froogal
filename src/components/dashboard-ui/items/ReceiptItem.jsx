import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';
import ReceiptItemBodyLayout from '../layouts/bodies/ReceiptItemBodyLayout';

const ReceiptItem = ({ width }) => {
  return (
    <ItemTileContainer width={width}>
      <ReceiptItemBodyLayout />
    </ItemTileContainer>
  );
}

export default ReceiptItem;