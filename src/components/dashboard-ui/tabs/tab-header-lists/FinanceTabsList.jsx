import React from 'react';

import FinanceTabHeader from '../tab-headers/FinanceTabHeader';

import { TabList } from '@chakra-ui/react';

const FinanceTabsList = () => {
  return (
   <TabList>
      <FinanceTabHeader tabTitleText='weekly' />
      <FinanceTabHeader tabTitleText='monthly' />
      <FinanceTabHeader tabTitleText='annually' />
   </TabList>
  );
}

export default FinanceTabsList;