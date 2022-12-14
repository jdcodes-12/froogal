import {
  Menu,
  Button,
  MenuButton,
  MenuOptionGroup,
  MenuItemOption,
  MenuList
} from '@chakra-ui/react';

import { FiChevronRight } from 'react-icons/fi';

const FinanceModeDropdown = ({ mode = '', changeMode = () => null, shadow }) => {

  const onChange = (e) => {
    changeMode(e);
  };

  return (
    <Menu>
      {/* Remove colorScheme here */}
      <MenuButton as={Button} colorScheme='purple' size='lg' fontSize='xl' boxShadow={shadow} leftIcon={<FiChevronRight />}>
        Finance Mode
      </MenuButton>
      <MenuList>
        <MenuOptionGroup onChange={onChange} defaultValue={mode} type='radio'>
          <MenuItemOption value='weekly'>Weekly</MenuItemOption>
          <MenuItemOption value='monthly'>Monthly</MenuItemOption>
          <MenuItemOption value='annual'>Annual</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default FinanceModeDropdown;