import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';

import { Text,
       } from '@chakra-ui/react';

const ReceiptViewTile = () => {
  return (
   <ItemTileContainer translateX={2} translateY={-8}>
    <Text>ReceiptView</Text>
   </ItemTileContainer>
  );
}

export default ReceiptViewTile;