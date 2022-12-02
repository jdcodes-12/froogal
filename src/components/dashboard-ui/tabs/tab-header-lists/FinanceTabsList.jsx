import FinanceTabHeader from '../tab-headers/FinanceTabHeader';

import { TabList } from '@chakra-ui/react';

const FinanceTabsList = () => {
  return (
    <TabList>
      <FinanceTabHeader tabTitleText='Weekly' />
      <FinanceTabHeader tabTitleText='Monthly' />
      <FinanceTabHeader tabTitleText='Annually' />
    </TabList>
  );
}

export default FinanceTabsList;