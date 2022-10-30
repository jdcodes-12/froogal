import React from 'react';

import FinanceWeeklyTabBody from './FinanceWeeklyTabBody';
import FinanceMonthlyTabBody from './FinanceMonthlyTabBody';
import FinanceAnnualTabBody from './FinanceAnnualTabBody';

import  { Flex } from '@chakra-ui/react';
        
const FinanceTabBody = ({ 
  financialSettings = null,
  variant, 
  onChange = () => null
}) => {
  const { 
    weeklyIncome,
    weeklyBudget,
    monthlyIncome,
    monthlyBudget,
    annualIncome, 
    annualBudget
  } = financialSettings;

  function renderSwitch() {
    switch(variant) {
      case 'weekly': return <FinanceWeeklyTabBody weeklySettings={{ weeklyBudget, weeklyIncome }} onChange={onChange} />;
      case 'monthly': return <FinanceMonthlyTabBody monthlySettings={{ monthlyBudget, monthlyIncome }} onChange={onChange} />;
      case 'annually': return <FinanceAnnualTabBody annualSettings={{ annualBudget, annualIncome }} onChange={onChange} />;
    }
  };

  return (
    <Flex direction='column' justify='start' gap='48px' mt='32px'>
      {renderSwitch()}
    </Flex>
  );
}

export default FinanceTabBody;