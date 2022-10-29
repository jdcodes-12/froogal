import React from 'react';

import FinanceTabPanel from './FinanceTabPanel';

import { TabPanels } from '@chakra-ui/react';

const FinanceTabPanelsList = ({ 
  onChange = () => null
}) => {
  return (
    <TabPanels>
        <FinanceTabPanel onChange={onChange} variant='weekly'/>
        <FinanceTabPanel onChange={onChange} variant='monthly'/>
        <FinanceTabPanel onChange={onChange} variant='annually'/>
    </TabPanels>
  );
}

export default FinanceTabPanelsList;