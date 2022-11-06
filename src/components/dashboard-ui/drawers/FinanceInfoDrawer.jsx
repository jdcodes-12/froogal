import React from 'react';
import ReceiptListModal from '../../modals/list-modals/ReceiptListModal';
import ExpenseListModal from '../../modals/list-modals/ExpenseListModal'
import FinanceTabsList from '../tabs/tab-header-lists/FinanceTabsList';
import FinanceTabPanelsList from '../tabs/panels/FinanceTabPanelsList';
import { FinanceModeDropdown } from '../dropdowns/FinanceModeDropdown';
import { addFinancialSettings } from '../../../utils/database-functions/addFinancialSettings';

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

const FinanceInfoDrawer = ({
    onChange = () => null,
    financialSettings = null, 
    changeMode = () => null,
    linkName,
    mode = '',
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    const onSubmission = () => {
      addFinancialSettings(financialSettings?.userID, financialSettings, financialSettings?.id);
      onClose();
    };
  
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
          <DrawerContent >
            <DrawerCloseButton mt='16px' rounded='full' p='20px' fontSize='16px'/>
            <DrawerHeader shadow='md' fontSize='4xl' mb='6px'>My Finances</DrawerHeader>
            <DrawerBody>
              <Tabs isFitted variant='enclosed'>
              <Flex flexDirection='column' justifyContent='center' gap='10px' m='10px'>
                <FinanceModeDropdown mode={mode} changeMode={changeMode} />
                <ReceiptListModal colorScheme='purple'/>
                <ExpenseListModal colorScheme='purple'/>
              </Flex>
                <FinanceTabsList />
                <FinanceTabPanelsList financialSettings={financialSettings} onChange={onChange}/>
              </Tabs>
            </DrawerBody>
  
            <DrawerFooter shadow='inner' mt='5px' borderTop='2px' borderColor='lightgray'>
              <Flex justify='space-evenly' align='center' w='full'>
                <Button variant='ghost' 
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