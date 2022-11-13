import ListView from '../lists/ListView';
import  { Box, useColorModeValue } from '@chakra-ui/react';

const ItemListTile = ({ 
  listType, 
  collection,
  maxHeight,
}) => {
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');
  return (
    <Box  
      border='1px' 
      borderColor={borderColor}
      borderRadius='md'
      boxShadow='inner'
      maxH={maxHeight}
      overflow='scroll'>
      <ListView listType={listType} collection={collection} />
    </Box>
  );
}

export default ItemListTile;