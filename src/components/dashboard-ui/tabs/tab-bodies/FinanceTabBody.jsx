import React from 'react';

import FinanceWeeklyTabBody from './FinanceWeeklyTabBody';
import FinanceMonthlyTabBody from './FinanceMonthlyTabBody';
import FinanceAnnualTabBody from './FinanceAnnualTabBody';

import  { Flex } from '@chakra-ui/react';
        
const FinanceTabBody = ({ 
  variant, 
  onChange = () => null
}) => {

  function renderSwitch() {
    switch(variant) {
      case 'weekly': return <FinanceWeeklyTabBody onChange={onChange} />;
      case 'monthly': return <FinanceMonthlyTabBody onChange={onChange} />;
      case 'annually': return <FinanceAnnualTabBody onChange={onChange} />;
    }
  };

  return (
    <Flex direction='column' justify='start' gap='48px' mt='32px'>
      {renderSwitch()}
    </Flex>
  );
}

export default FinanceTabBody;