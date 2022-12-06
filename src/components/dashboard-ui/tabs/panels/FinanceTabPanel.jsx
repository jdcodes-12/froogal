import FinanceTabBody from '../tab-bodies/FinanceTabBody';

import { TabPanel } from '@chakra-ui/react';

const FinanceTabPanel = ({
  variant,
  financialSettings = null,
  onChange = () => null
}) => {
  return (
    <TabPanel>
      <FinanceTabBody financialSettings={financialSettings} variant={variant} onChange={onChange} />
    </TabPanel>
  );
}

export default FinanceTabPanel;