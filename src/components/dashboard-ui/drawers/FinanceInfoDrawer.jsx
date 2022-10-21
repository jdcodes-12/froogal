import React from 'react';

import FinanceTabsList from '../tabs/tab-header-lists/FinanceTabsList';
import FinanceTabPanelsList from '../tabs/panels/FinanceTabPanelsList';

import  { Button,
          Text,
          Flex,
          Drawer,
          DrawerOverlay,
          DrawerCloseButton,
          DrawerContent,
          DrawerHeader,
          DrawerBody,
          DrawerFooter,
          useDisclosure,
          Tabs,
        } from '@chakra-ui/react';

const FinanceInfoDrawer = ({ linkName }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    // Need to setup the aria connections for better hit
    // detection in sidebar links. As of right now
    // only clicking on the link text opens drawer.
    // This is not the most accessible.
    
    return (
      <>
        <Button ref={btnRef} 
                onClick={onOpen}
                variant='unstyled'
                size='md'>
          <Text fontSize='xl'>
            {linkName}
          </Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='lg'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton mt='16px' fontSize='16px'/>
            <DrawerHeader fontSize='4xl' mb='16px'>My Finances</DrawerHeader>
            <DrawerBody>
              <Tabs isFitted variant='enclosed'>
                <FinanceTabsList />
                <FinanceTabPanelsList />
              </Tabs>
            </DrawerBody>
  
            <DrawerFooter>
              <Flex justify='space-evenly' align='center' w='full'>
                <Button variant='unstyled' 
                        rounded='full' 
                        colorScheme='purple'
                        size='lg'
                        fontSize='xl'
                        onClick={onClose}
                >
                  Cancel
                </Button>
                <Button variant='solid' 
                        rounded='full' 
                        colorScheme='purple'
                        size='lg'
                        fontSize='xl'
                        onClick={() => console.log("clicked")}
                >
                  Save
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default FinanceInfoDrawer;