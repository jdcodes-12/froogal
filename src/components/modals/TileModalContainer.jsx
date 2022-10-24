import React from 'react';

import ModalContainer from './ModalContainer';

import  { useDisclosure, Box} from '@chakra-ui/react';

const TileModalContainer = ({colorScheme, modalTitle, modalBody, modalSize, 
                             children, modalPrimaryBtnText, hasPrimaryBtn,
                             hasCancelBtn }) => {
  const { isOpen, onOpen, isClose, onClose } = useDisclosure();
  
  return (
    <>
      <Box onClick={onOpen}>
        {children}
      </Box>

      <ModalContainer colorScheme={colorScheme} 
                      modalTitle={modalTitle}
                      modalSize={modalSize} 
                      isOpen={isOpen}
                      isClose={isClose}
                      onClose={onClose}
                      onOpen={onOpen}
                      modalPrimaryBtnText={modalPrimaryBtnText}
                      hasCancelBtn={hasCancelBtn}
                      hasPrimaryBtn={hasPrimaryBtn}
      >
        {modalBody}
      </ModalContainer>
    </>
  );
}

export default TileModalContainer;