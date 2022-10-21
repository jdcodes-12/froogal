import React from 'react';

import FinanceTabBody from '../tab-bodies/FinanceTabBody';

import { TabPanel } from '@chakra-ui/react';

const FinanceTabPanel = ({ variant }) => {
  return (
    <TabPanel>
      <FinanceTabBody  variant={variant}/>
    </TabPanel>
  );
}

export default FinanceTabPanel;