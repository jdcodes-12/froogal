import React from 'react';

import  { Modal,
          ModalOverlay,
          ModalCloseButton,
          ModalContent,
          ModalHeader,
          ModalBody,
          ModalFooter,
          Button,
        } from '@chakra-ui/react';

const ModalContainer = ({colorScheme, modalTitle, modalSize, children,
                         isOpen, isClose, onClose}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
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

export default ModalContainer;