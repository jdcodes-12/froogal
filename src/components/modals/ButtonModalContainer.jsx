import React from 'react';

import ModalContainer from './ModalContainer';

import  { Button,
          useDisclosure,
        } from '@chakra-ui/react';

const ButtonModalContainer = ({colorScheme, btnVariant, btnText, width, modalTitle, modalBody, children}) => {
  const { isOpen, onOpen, isClose, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme={colorScheme} 
              variant={btnVariant} 
              onClick={onOpen}
              width={width}>
        {btnText}
      </Button>

      <ModalContainer colorScheme={colorScheme} 
                      children={children}
                      modalTitle={modalTitle} 
                      isOpen={isOpen}
                      onOpen={onOpen}
                      isClose={isClose}
                      onClose={onClose}
      >
          {modalBody}
      </ModalContainer>
    </>
  );
}

export default ButtonModalContainer;