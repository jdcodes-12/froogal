import React from 'react';

import  { Modal,
          ModalOverlay,
          ModalCloseButton,
          ModalContent,
          ModalHeader,
          ModalBody,
          ModalFooter,
          Button,
          Box,
        } from '@chakra-ui/react';

const ModalContainer = ({colorScheme, modalTitle, modalSize, children,
                         isOpen, isClose, onClose, modalPrimaryBtnText,
                         hasCancelBtn, hasPrimaryBtn}) => {

  function renderModalButton() {
    if(hasPrimaryBtn) {
      if (hasCancelBtn) {
        return (
          <>
            <Button variant='ghost' colorScheme={colorScheme} mr={3} onClick={onClose}>Cancel</Button>
            <Button variant='outline' colorScheme={colorScheme}>{modalPrimaryBtnText}</Button>
          </>
        )
      } 
      return <Button variant='outline' colorScheme={colorScheme}>{modalPrimaryBtnText}</Button>
    }
    else 
      return <Box/>
  }

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
             {renderModalButton()}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalContainer;