import React from 'react';

import ExpenseItemModalBody from '../modal-bodies/ExpenseItemModalBody';

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

const ReceiptListModal = ({ colorScheme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size='lg' 
              fontSize='xl' 
              colorScheme='purple' 
              variant='outline'
              onClick={onOpen}
      >
        View Expenses
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='3xl'>Receipt ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ExpenseItemModalBody />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' colorScheme={colorScheme} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='outline' colorScheme={colorScheme}>Select Expense</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReceiptListModal;