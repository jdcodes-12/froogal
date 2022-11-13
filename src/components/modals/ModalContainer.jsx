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
  isCentered = false,
  onClose, 
  modalPrimaryBtnText,
  disabled,
  hasCancelBtn = false, 
  hasPrimaryBtn = false, 
  onPrimaryClick = () => null
}) => {
  const onSubmission = (e) => {
    onPrimaryClick(e);
    onClose();
  }

  const renderModalButton = () => {
    const primaryButtonJSX = (
      <Button variant='outline' disabled={disabled} colorScheme={colorScheme} onClick={onSubmission}>{modalPrimaryBtnText}</Button>
    );
    const cancelBtnJSX = (
        <Button variant='ghost' colorScheme={colorScheme} mr={3} onClick={onClose}>Cancel</Button>
    );

    return hasCancelBtn ? hasPrimaryBtn ? (<>{cancelBtnJSX}{primaryButtonJSX}</>) : cancelBtnJSX : hasPrimaryBtn ? primaryButtonJSX : <Box/>
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered={isCentered}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader shadow='md' p='20px' mb='5px' fontSize='2xl'>{modalTitle}</ModalHeader>
          <ModalCloseButton p='20px' rounded='full' />
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