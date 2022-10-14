import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';

import { Box,
         Text,
         Flex,
         Badge,
         Stat,
         List, 
         ListItem,
       } from '@chakra-ui/react';

const ExpenseItemTile = (props) => {
  const { width } = props;
  return (
   <ItemTileContainer width={width}>
      <Flex direction="column">
        <Box p='8px'>
          <Flex justify='space-between'>
            <Badge>Pending</Badge>
            <Badge>12/10</Badge>
          </Flex>
          <Box>
            <Flex p='8px' justify='space-evenly'>
              <List>
                <ListItem>
                  <Text>Category</Text>
                </ListItem>
                <ListItem>
                  <Text>Location</Text>
                </ListItem>
                <ListItem>
                  <Text>Due Date</Text>
                </ListItem>
              </List>
              <Stat>$100</Stat>
            </Flex>
          </Box>
        </Box>
      </Flex>
   </ItemTileContainer>
  );
}

export default ExpenseItemTile;