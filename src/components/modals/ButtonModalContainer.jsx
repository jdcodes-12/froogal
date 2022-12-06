import ModalContainer from './ModalContainer';
import {
  Button,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';

const ButtonModalContainer = ({
  isCentered,
  colorScheme,
  btnVariant,
  btnText = '',
  btnSize,
  btnFontSize,
  onDeletion = null,
  children,
  modalTitle = '',
  modalBody = null,
  modalSize,
  modalPrimaryBtnText = '',
  width,
  hasCancelBtn = false,
  hasPrimaryBtn = false,
  onPrimaryClick = () => null,
  disabled = false,
  shadow,
}) => {
  const { isOpen, onOpen, isClose, onClose } = useDisclosure();
  const btnBgColor = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const btnTextColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  useEffect(() => {
    onClose();
  }, [onDeletion])

  return (
    <>
      <Button
        bgColor={btnBgColor}
        color={btnTextColor}
        variant={btnVariant}
        onClick={onOpen}
        width={width}
        size={btnSize}
        fontSize={btnFontSize}
        boxShadow={shadow}
      >
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