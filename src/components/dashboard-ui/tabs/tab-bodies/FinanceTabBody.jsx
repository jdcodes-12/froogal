import React from 'react';

import FinanceWeeklyTabBody from './FinanceWeeklyTabBody';
import FinanceMonthlyTabBody from './FinanceMonthlyTabBody';
import FinanceAnnualTabBody from './FinanceAnnualTabBody';

import  { Flex } from '@chakra-ui/react';
        
const FinanceTabBody = ({ variant }) => {

  function renderSwitch() {
    switch(variant) {
      case 'weekly': return <FinanceWeeklyTabBody />;
      case 'monthly': return <FinanceMonthlyTabBody />;
      case 'annually': return <FinanceAnnualTabBody />;
    }
  };

  return (
    <Flex direction='column' justify='start' gap='48px' mt='32px'>
      {renderSwitch()}
    </Flex>
  );
}

export default FinanceTabBody;