import ModalContainer from './ModalContainer';
import { useDisclosure, Box } from '@chakra-ui/react';

const TileModalContainer = ({
  colorScheme,
  modalTitle,
  modalBody,
  modalSize,
  children,
  width
}) => {
  const { isOpen, onOpen, isClose, onClose } = useDisclosure();

  return (
    <>
      {/* Changed here */}
      <Box onClick={onOpen} width={width}>
        {children}
      </Box>

      <ModalContainer
        colorScheme={colorScheme}
        modalTitle={modalTitle}
        modalSize={modalSize}
        isOpen={isOpen}
        isClose={isClose}
        onClose={onClose}
        onOpen={onOpen}
      >
        {modalBody}
      </ModalContainer>
    </>
  );
}

export default TileModalContainer;