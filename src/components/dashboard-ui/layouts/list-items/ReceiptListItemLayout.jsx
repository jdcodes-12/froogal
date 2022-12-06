import {
  Box,
  Flex,
  Text,
  Stat,
  StatNumber,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import ModalContainer from '../../../modals/ModalContainer';

const ReceiptListItemLayout = ({
  receipt = {},
  noReceipt = false,
  id = "",
  onDeletion = () => null,
  deleteModal = false,
}) => {

  const { isOpen, onOpen, isClose, onClose } = useDisclosure();
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');
  const date = receipt?.date
    ? !receipt?.date?.seconds
      ? new Date(receipt?.date).toDateString()
      : receipt.date.toDate().toDateString()
    : null;

  const price = receipt?.totalPrice ? parseFloat(receipt.totalPrice) : 0;
  const handleContainerClick = (e) => {
    if (deleteModal) {
      onOpen();
    }
  }

  // Does key need to be here or on the outside of the list?
  return (
    (!noReceipt)
      ? <>
        <Box onClick={handleContainerClick} cursor='pointer'>
          <Flex justify='space-between'
            align='center'
            w='full'
            px='12px'
            py='8px'
            borderBottom='1px'
            borderBottomColor={borderColor}
            borderBottomWidth='50%'
          >
            <Flex direction='column' align='start'>
              <Text fontSize='md' fontWeight='hairline'>{date}</Text>
              <Text fontSize='2xl' fontWeight='medium'>{receipt?.name}</Text>
            </Flex>
            <Box alignSelf='end'>
              <Stat fontSize='lg' fontWeight='medium'>
                <StatNumber>$ {price.toFixed(2)}</StatNumber>
              </Stat>
            </Box>
          </Flex>
        </Box>
        <ModalContainer
          isCentered
          colorScheme='purple'
          modalTitle='Confirmation'
          modalSize='sm'
          isOpen={isOpen}
          onOpen={onOpen}
          onPrimaryClick={(e) => onDeletion(e, id)}
          isClose={isClose}
          onClose={onClose}
          modalPrimaryBtnText='Delete Forever?'
          hasCancelBtn
          hasPrimaryBtn >
          <>Are you sure you want to delete?</>
        </ModalContainer>
      </>
      : <Box w='full' textAlign='center' px='12px' py='8px' fontSize='xl'>No Receipts</Box>
  );
}

export default ReceiptListItemLayout;