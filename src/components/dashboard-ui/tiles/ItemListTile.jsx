import React from 'react';

import ListView from '../lists/ListView';

import  { Box } from '@chakra-ui/react';

const ItemListTile = ({ 
  listType, 
  collection,
}) => {
  return (
    <Box  
      border='1px' 
      borderColor='gray.200'
      borderRadius='sm'
      boxShadow='inner'
    >
      <ListView listType={listType} collection={collection} />
    </Box>
  );
}

export default ItemListTile;