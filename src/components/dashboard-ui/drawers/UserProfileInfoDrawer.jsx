import React from 'react';

import  { FiUser, 
          FiLock, 
          FiImage,
          FiMail
        } from 'react-icons/fi';

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
          FormControl,
          FormLabel,
          FormHelperText,
          FormErrorMessage,
          InputGroup,
          InputLeftAddon,
          Input,
          InputRightElement
        } from '@chakra-ui/react';

const UserProfileInfoDrawer = ({ linkName }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
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
          size='lg'
        >
          <DrawerOverlay />
          <DrawerContent pl='16px'>
            <DrawerCloseButton mt='16px' fontSize='16px'/>
            <DrawerHeader fontSize='4xl' mb='16px'>My Profile</DrawerHeader>
            <DrawerBody>
              <Flex direction='column' justify='start' gap='48px' mt='32px'>
                <FormControl>
                  <FormLabel fontSize='2xl' fontWeight='medium'>First Name</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiUser size='32px' />} pr='16px'/>
                    <Input type='text' placeholder='BigMoney'/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Last Name</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiUser size='32px' />} pr='16px'/>
                    <Input type='text' placeholder='Millionaire'/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Avatar</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiImage size='32px' />} pr='16px'/>
                    <Input placeholder='Drag and drop your .png or .jpg file here'/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Email</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiMail size='32px' />} pr='16px'/>
                    <Input type='email' placeholder='BigMoneyMillionaire@froogal.com'/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Password</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiLock size='32px' />} pr='16px'/>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter new password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button mb='8px' size='md' onClick={handleClick} colorScheme='purple'>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>
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

  export default UserProfileInfoDrawer;