import React from 'react';

import FinanceTabBody from '../tabs/FinanceTabBody'; 

import { TabPanel } from '@chakra-ui/react';

const WeeklyTabPanel = () => {
  return (
    <TabPanel>
      <FinanceTabBody />
    </TabPanel>
  );
}

export default WeeklyTabPanel;