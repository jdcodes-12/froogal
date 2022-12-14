import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import ColorModeToggler from '../togglers/ColorModeToggler';
import FinanceInfoDrawer from '../drawers/FinanceInfoDrawer';
import UserProfileInfoDrawer from '../drawers/UserProfileInfoDrawer';

import {
  Box,
  Button,
  CloseButton,
  IconButton,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  FiTrendingUp,
  FiSettings,
  FiLogOut,
  FiMenu
} from 'react-icons/fi';
import { AUTH_ACTION_TYPES } from '../../../actionTypes';


const generateLinkItems = (userID, financialSettings, onChange, changeMode, mode, receipts) => {
  return ([
    {
      id: 'finance_info_drawer',
      linktext: 'Financial Info',
      icon: FiTrendingUp,
      component: <FinanceInfoDrawer receipts={receipts} mode={mode} changeMode={changeMode} financialSettings={financialSettings} onChange={onChange} linkName='Finances' />
    },
    {
      id: 'user_profile_settings_drawer',
      linktext: 'User Settings',
      icon: FiSettings,
      component: <UserProfileInfoDrawer userID={userID} linkName='User Settings' />
    },
    {
      id: 'sign-out',
      linktext: 'Sign Out',
      icon: FiLogOut,
      component: <SignOut linkName='Sign Out' />
    }
  ]);
}

const SignOut = ({ linkName }) => {

  const { dispatch } = useContext(AuthContext);

  return (
    <Button
      onClick={() => {
        dispatch({
          type: AUTH_ACTION_TYPES.LOGOUT
        });
      }}
      variant='unstyled'
      size='md' >
      <Text fontSize='xl'>{linkName}</Text>
    </Button>
  )
}

const Sidebar = ({
  onChange = () => null,
  financialSettings = null,
  changeMode = () => null,
  children,
  userID = null,
  mode = '',
  receipts = [],
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.primary.base');
  const linkItems = generateLinkItems(userID, financialSettings, onChange, changeMode, mode, receipts);

  return (
    <Box minH='100vh' bg={bg}>
      <SidebarContent
        linkItems={linkItems}
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
          <SidebarContent
            linkItems={linkItems}
            onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ linkItems, onClose, ...rest }) => {
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
          {linkItems.map((link, index) => (
            <NavItem key={index} icon={link.icon} fontSize='xl'>
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
  const hovbg = { bg: useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base') };
  const hovcolor = { color: useColorModeValue('brand.white.base', 'brand.darkmode.primary.base') };

  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        p='3'
        mx='2'
        align='center'
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
            _groupHover={{ ...hovcolor }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('brand.primary.base', 'brand.darkmode.gray.600')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Froogal
      </Text>
    </Flex>
  );
};

export default Sidebar;