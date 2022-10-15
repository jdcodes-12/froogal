import React from 'react';

import  { Button,
          Drawer,
          DrawerOverlay,
          DrawerCloseButton,
          DrawerContent,
          DrawerHeader,
          DrawerBody,
          DrawerFooter,
          Input,
          useDisclosure,
          Text,
        } from '@chakra-ui/react';

const UserProfileInfoDrawer = ({ linkName }) => {
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
        >
          <Text fontSize='xl'>
            {linkName}
          </Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size = 'lg'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontSize='4xl'>User Profile Settings Go Here</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Profile Updates...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default UserProfileInfoDrawer;