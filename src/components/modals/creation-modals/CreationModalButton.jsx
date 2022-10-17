import React from 'react';

import { Modal,
         ModalOverlay,
         ModalCloseButton,
         ModalContent,
         ModalHeader,
         ModalBody,
         ModalFooter,
         Button,
         useDisclosure,
         Text,
} from '@chakra-ui/react';

const CreationModalButton = ({colorScheme, variant, text}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme={colorScheme} 
              variant={variant} 
              onClick={onOpen}>
        {text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>lorem 30</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={colorScheme} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant={variant}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreationModalButton;

// - item name*
// - item category*
// - item quantity*
// - item unit price*