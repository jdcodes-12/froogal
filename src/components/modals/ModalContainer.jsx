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

const ModalContainer = ({ 
  colorScheme, 
  modalTitle, 
  modalSize, 
  children,                      
  isOpen, 
  isClose, 
  onClose, 
  modalPrimaryBtnText,
  hasCancelBtn, 
  hasPrimaryBtn, 
  onPrimaryClick = () => null
}) => {
  const onSubmission = (e) => {
    // onPrimaryClick(e);
    onClose();
  }

  const renderModalButton = (hasCancelBtn = true, hasPrimaryBtn = true) => {
    const primaryButtonJSX = (
      <Button variant='outline' colorScheme={colorScheme} onClick={onSubmission}>{modalPrimaryBtnText}</Button>
    );
    const cancelBtnJSX = (
        <Button variant='ghost' colorScheme={colorScheme} mr={3} onClick={onClose}>Cancel</Button>
    );

    return hasCancelBtn ? hasPrimaryBtn ? (<>{cancelBtnJSX}{primaryButtonJSX}</>) : cancelBtnJSX : hasPrimaryBtn ? primaryButtonJSX : <Box/>
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
             {renderModalButton(hasCancelBtn, hasPrimaryBtn)}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalContainer;