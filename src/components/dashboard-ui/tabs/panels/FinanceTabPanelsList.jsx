import React from 'react';

import FinanceTabPanel from './FinanceTabPanel';

import { TabPanels } from '@chakra-ui/react';

const FinanceTabPanelsList = () => {
  return (
    <TabPanels>
        <FinanceTabPanel variant='weekly'/>
        <FinanceTabPanel variant='monthly'/>
        <FinanceTabPanel variant='annually'/>
    </TabPanels>
  );
}

export default FinanceTabPanelsList;