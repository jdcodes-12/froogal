import ButtonModalContainer from '../../modals/ButtonModalContainer';
import ReceiptItemTile from '../tiles/ReceiptItemTile';
import ReceiptCreationModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptCreationModalBody';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

/*
* The RecentReceiptsList should only render 
* 3 most recent receipts by default.
* The list should only show 3 ReceiptItemTiles.
*/
const generateReceiptTile = (receipts) => {
  switch (receipts.length ?? 0) {

    case 0:
      return (
        <>
          <Box w='full' textAlign='center' shadow='md' fontSize='xl' fontWeight='semibold'>
            <Text shadow='inner' p='20px' w='full'>No Receipts Yet</Text>
          </Box>

          <ButtonModalContainer
            btnVariant='solid'
            colorScheme='purple'
            btnText='Create a Receipt?'
            modalBody={<ReceiptCreationModalBody />}
            modalTitle='Receipt Creation'
            modalSize='xl'
            modalPrimaryBtnText='Save Changes'
            hasCancelBtn
            hasPrimaryBtn
            width='full'
          />
        </>
      );

    case 1:
      return (
        <ReceiptItemTile receipt={receipts[0]} width='full' />
      );

    case 2:
      return (
        <>
          <ReceiptItemTile receipt={receipts[0]} width='full' />
          <ReceiptItemTile receipt={receipts[1]} width='full' />
        </>
      );

    case 3:
      return (
        <>
          <ReceiptItemTile receipt={receipts[0]} width='full' />
          <ReceiptItemTile receipt={receipts[1]} width='full' />
          <ReceiptItemTile receipt={receipts[2]} width='full' />
        </>
      );

    default:
      return (
        <>
          <ReceiptItemTile receipt={receipts[0]} width='full' />
          <ReceiptItemTile receipt={receipts[1]} width='full' />
          <ReceiptItemTile receipt={receipts[2]} width='full' />
        </>
      );
  }
}

const RecentReceiptsList = ({
  receipts = [],
}) => {

  return (
    <Box>
      <Heading py='6' fontSize='3xl' align='center'>Recent Receipts</Heading>
      <Flex direction='column' gap='8'>
        {generateReceiptTile(receipts)}
      </Flex>
    </Box>
  );
}

export default RecentReceiptsList;