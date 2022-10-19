import React from 'react';

import  { Modal,
          ModalOverlay,
          ModalCloseButton,
          ModalContent,
          ModalHeader,
          ModalBody,
          ModalFooter,
          Button,
          useDisclosure,
        } from '@chakra-ui/react';

const UpdateModalContainer = ({colorScheme, btnVariant, btnText, width, modalTitle, children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme={colorScheme} 
              variant={btnVariant} 
              onClick={onOpen}
              width={width}>
        {btnText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='2xl'>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' colorScheme={colorScheme} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='outline' colorScheme={colorScheme}>Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateModalContainer;