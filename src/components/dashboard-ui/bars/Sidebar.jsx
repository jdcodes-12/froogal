import React from 'react';

import ColorModeToggler from '../togglers/ColorModeToggler';

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Switch,
  Spacer,
} from '@chakra-ui/react';

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';

const linkItems = [
  { name: 'Financial Info', icon: FiTrendingUp},
  { name: 'Profile Settings', icon: FiSettings },
];

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
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
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex direction='column' h='full' align='start'>
        <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
          <Text fontSize='3xl' fontFamily='monospace' fontWeight='bold'>
            Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Flex direction='column' alignt='start' gap='16px'>
          {linkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} fontSize='xl'>
              {link.name}
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
          bg: 'purple.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='22px'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default Sidebar;