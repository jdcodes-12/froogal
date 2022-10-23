import React from 'react';

import ModalContainer from './ModalContainer';
import AdjustBudgetModalBody from './modal-bodies/AdjustBudgetModalBody';

import  { useDisclosure, Box} from '@chakra-ui/react';

const TileModalContainer = ({colorScheme, modalTitle, children}) => {
  const { isOpen, onOpen, isClose, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen}>
        {children}
      </Box>

      <ModalContainer colorScheme={colorScheme} 
                      children={children}
                      modalTitle={modalTitle} 
                      isOpen={isOpen}
                      isClose={isClose}
                      onClose={onClose}
      >
          <AdjustBudgetModalBody />
      </ModalContainer>
    </>
  );
}

export default TileModalContainer;