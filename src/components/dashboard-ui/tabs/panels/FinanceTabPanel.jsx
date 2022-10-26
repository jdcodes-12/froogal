import React from 'react';

import FinanceTabBody from '../tab-bodies/FinanceTabBody';

import { TabPanel } from '@chakra-ui/react';

const FinanceTabPanel = ({ 
  variant,
  onChange = () => null
}) => {
  return (
    <TabPanel>
      <FinanceTabBody variant={variant} onChange={onChange}/>
    </TabPanel>
  );
}

export default FinanceTabPanel;