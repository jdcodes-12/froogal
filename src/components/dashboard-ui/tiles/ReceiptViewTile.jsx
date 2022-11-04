import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';
import ReceiptViewTileBodyLayout from '../layouts/bodies/ReceiptViewTileBodyLayout';

import { Text } from '@chakra-ui/react';

const ReceiptViewTile = ({
  receipts = null,
}) => {
  return (
   <ItemTileContainer translateX={2} translateY={-4} borderRadius='md' shouldHover={false}>
      <ReceiptViewTileBodyLayout receipts={receipts} />
   </ItemTileContainer>
  );
}

export default ReceiptViewTile;