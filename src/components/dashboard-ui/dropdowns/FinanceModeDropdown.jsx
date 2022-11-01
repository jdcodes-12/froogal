import  { React, useState } from 'react';
import {
    Menu,
    Button,
    MenuButton,
    MenuOptionGroup,
    MenuItemOption,
    MenuList
} from '@chakra-ui/react';


import { FiChevronRight } from 'react-icons/fi';

export const FinanceModeDropdown = ({ mode = '', changeMode = () => null }, ) => {

    const onChange = (e) => {
        changeMode(e);
    };

    return (
        <Menu>
        <MenuButton as={Button} colorScheme='purple' size='lg' fontSize='xl' leftIcon={<FiChevronRight />}>
          Finance Mode
        </MenuButton>
        <MenuList w='full'>
            <MenuOptionGroup onChange={onChange} defaultValue={mode} type='radio'>
                <MenuItemOption value='weekly'>Weekly</MenuItemOption>
                <MenuItemOption value='monthly'>Monthly</MenuItemOption>
                <MenuItemOption value='annual'>Annual</MenuItemOption>
            </MenuOptionGroup>
        </MenuList>
      </Menu>  
    );
}