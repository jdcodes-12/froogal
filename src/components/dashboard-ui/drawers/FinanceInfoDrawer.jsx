import React, { useState } from 'react';

import FinanceTabsList from '../tabs/tab-header-lists/FinanceTabsList';
import FinanceTabPanelsList from '../tabs/panels/FinanceTabPanelsList';

import { addFinancialSettings } from '../../../utils/functions/addFinancialSettings';

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

const FinanceInfoDrawer = ({ linkName, user = null }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();
    const [financialSettings, setFinancialSettings] = useState({
      monthlyBudget: 0,
      monthlyIncome: 0,
      weeklyBudget: 0,
      weeklyIncome: 0,
      annualBudget: 0,
      annualIncome: 0,
    });

    const onChangeHandler = (value) => {
      setFinancialSettings((prev) => ({
        ...prev, ...value
      }));
    };

    const onSubmission = () => {
      // addFinancialSettings(user.uid, financialSettings);
      onClose();
    }
  
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
                <FinanceTabPanelsList onChange={onChangeHandler}/>
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
                        onClick={onSubmission}
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