import React from 'react';

import ExpenseItemModalBody from '../modals/modal-bodies/ExpenseItemModalBody';

import  { Modal,
          ModalOverlay,
          ModalCloseButton,
          ModalContent,
          ModalHeader,
          ModalBody,
          ModalFooter,
          Button,
          useDisclosure,
          Box,
        } from '@chakra-ui/react';

const ExpenseTileModal = ({ colorScheme, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        {children}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='3xl'>Expense ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ExpenseItemModalBody />
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

export default ExpenseTileModal;