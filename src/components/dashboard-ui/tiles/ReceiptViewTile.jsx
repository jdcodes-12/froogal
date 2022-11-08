import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';
import ReceiptViewTileBodyLayout from '../layouts/bodies/ReceiptViewTileBodyLayout';

import { Text } from '@chakra-ui/react';

const ReceiptViewTile = ({
  receipts = null,
  hub = false
}) => {
  return (
   <ItemTileContainer hub={hub} translateX={2} translateY={-4} borderRadius='2xl' shouldHover={false} boxShadow='xl'>
      <ReceiptViewTileBodyLayout receipts={receipts} />
   </ItemTileContainer>
  );
}

export default ReceiptViewTile;