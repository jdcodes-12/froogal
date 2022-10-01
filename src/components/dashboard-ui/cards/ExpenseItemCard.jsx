import React from 'react';

import CardContainer from '../../containers-ui/card-body-container';

import { Center,
         Text,
       } from '@chakra-ui/react';

const ExpenseItemCard = () => {
  return (
   <CardContainer>
      <Center>
          <Text>Expense Card</Text>
      </Center>
   </CardContainer>
  );
}

export default ExpenseItemCard;