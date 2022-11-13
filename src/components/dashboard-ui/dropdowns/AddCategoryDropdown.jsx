import { FiChevronRight } from 'react-icons/fi';

import { 
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption
 } from "@chakra-ui/react";

export const AddCategoryDropdown = ({
    categories = [], 
    onChange = () => null,
}) => {

    return (
        <>
            <Menu 
                closeOnSelect={false}
                closeOnBlur
                placement='top'>
                <MenuButton  
                    as={Button} 
                    colorScheme='purple' 
                    size='lg'
                    variant='solid'
                    fontSize='xl' 
                    leftIcon={<FiChevronRight />}>
                        Categories
                </MenuButton>
                <MenuList w='full'>
                    <MenuOptionGroup onChange={onChange} type='checkbox'>
                        { categories.length > 0 
                            ? categories.map((category, index) => {
                                return <MenuItemOption key={index} value={category?.name}>{category?.name}</MenuItemOption>;
                                }) 
                            : null
                        }
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </>
    );
};