import React from 'react';

import FinanceTabPanel from './FinanceTabPanel';

import { TabPanels } from '@chakra-ui/react';

const FinanceTabPanelsList = ({ 
  financialSettings = null,
  onChange = () => null
}) => {
  return (
    <TabPanels mb='35px'>
        <FinanceTabPanel financialSettings={financialSettings} onChange={onChange} variant='weekly'/>
        <FinanceTabPanel financialSettings={financialSettings} onChange={onChange} variant='monthly'/>
        <FinanceTabPanel financialSettings={financialSettings} onChange={onChange} variant='annually'/>
    </TabPanels>
  );
}

export default FinanceTabPanelsList;