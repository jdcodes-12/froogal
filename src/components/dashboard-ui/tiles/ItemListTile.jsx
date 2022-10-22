import React from 'react';

import ItemList from '../lists/ItemList';

import  { Box } from '@chakra-ui/react';
const ItemListTile = () => {
  return (
    <Box  border='1px' 
          borderColor='gray.200'
          borderRadius='sm'
          boxShadow='inner'
    >
      <ItemList />
    </Box>
  );
}

export default ItemListTile;