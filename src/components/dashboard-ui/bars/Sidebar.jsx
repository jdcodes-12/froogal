import React from 'react';

import ColorModeToggler from '../togglers/ColorModeToggler';
import FinanceInfoDrawer from '../drawers/FinanceInfoDrawer';
import UserProfileInfoDrawer from '../drawers/UserProfileInfoDrawer';

import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { FiTrendingUp, FiSettings } from 'react-icons/fi';

const linkItems = [
  { id: 'finance_info_drawer',
    linktext: 'Financial Info',
    icon: FiTrendingUp, 
    component: <FinanceInfoDrawer linkName='Finances'/>
  },
  { id: 'user_profile__settings_drawer',
    linktext: 'User Settings', 
    icon: FiSettings,
    component: <UserProfileInfoDrawer linkName='User Settings'/>
  }
];

const Sidebar = ({ children }) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.primary.base');
  const { colorMode } = useColorMode();

  return (
    <Box minH='100vh' bg={bg}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} /> */}
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('brand.primary.base', 'brand.darkmode.gray.600')}
      borderRight='1px'
      borderRightColor={useColorModeValue('brand.lightmode.gray.100', 'brand.darkmode.gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex direction='column' h='full' align='start'>
        <Flex alignItems='center' mx='8' justifyContent='space-between'>
          <Flex direction='column' py='32px'>
            <Text fontSize='4xl' fontFamily='monospace' fontWeight='bold'>
              Froogal
            </Text>
          </Flex>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Flex direction='column' alignt='start' gap='16px'>
          {linkItems.map((link) => (
            <NavItem key={link.id} icon={link.icon} fontSize='xl'>
              {link.component}
            </NavItem>
          ))}
        </Flex>
        <Spacer />
        <Box px='32px' pb='32px' w='full'>
          <ColorModeToggler />
        </Box>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  const hovbg = {bg: useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base')};
  const hovcolor = {color: useColorModeValue('brand.white.base', 'brand.darkmode.primary.base')};

  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='xl'
        role='group'
        cursor='pointer'
        _hover={{
          ...hovbg,
          ...hovcolor,
        }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='22px'
            _groupHover={{...hovcolor}}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default Sidebar;