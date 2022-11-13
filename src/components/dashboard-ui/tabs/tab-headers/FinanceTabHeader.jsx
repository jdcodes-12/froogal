import { Tab } from '@chakra-ui/react';

const FinanceTabHeader = ({ tabTitleText }) => {
  return (
    <Tab fontSize='2xl' fontWeight='medium' py='16px'>{tabTitleText}</Tab>
  );
}

export default FinanceTabHeader;