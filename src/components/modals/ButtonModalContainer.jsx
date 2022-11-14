import React from 'react';

import ModalContainer from './ModalContainer';

import  { Button,
          useDisclosure,
          useColorModeValue
  } from '@chakra-ui/react';

const ButtonModalContainer = ({
  isCentered,
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
  const btnBgColor = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const btnTextColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <>
      <Button
        bgColor={btnBgColor}
        color={btnTextColor}
        variant={btnVariant}
        onClick={onOpen}
        width={width}
        size={btnSize}
        fontSize={btnFontSize}>
        {btnText}
      </Button>
      
      <ModalContainer 
        isCentered={isCentered}
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