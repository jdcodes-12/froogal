import React from 'react';

import ModalContainer from './ModalContainer';

import  { Button,
          useDisclosure,
  } from '@chakra-ui/react';

const ButtonModalContainer = ({
  colorScheme, 
  btnVariant, 
  btnText = '', 
  btnSize, 
  btnFontSize, 
  children, 
  modalTitle = '', 
  modalBody = null, 
  modalSize, 
  modalPrimaryBtnText = '', 
  width,                             
  hasCancelBtn = false,
  hasPrimaryBtn = false, 
  onPrimaryClick = () => null, 
  disabled = false
}) => {
  const { isOpen, onOpen, isClose, onClose } = useDisclosure();
  return (
    <>
      <Button 
        colorScheme={colorScheme} 
        variant={btnVariant}
        onClick={onOpen}
        width={width}
        size={btnSize}
        fontSize={btnFontSize}>
        {btnText}
      </Button>
      <ModalContainer 
        colorScheme={colorScheme} 
        children={children}
        modalTitle={modalTitle} 
        modalSize={modalSize}
        isOpen={isOpen}
        onOpen={onOpen}
        onPrimaryClick={onPrimaryClick}
        isClose={isClose}
        onClose={onClose}
        modalPrimaryBtnText={modalPrimaryBtnText} 
        hasCancelBtn={hasCancelBtn} 
        hasPrimaryBtn={hasPrimaryBtn}
        disabled={disabled}>
          {modalBody}
      </ModalContainer>
    </>
  );
}

export default ButtonModalContainer;