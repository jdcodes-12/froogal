import ReceiptViewTile from '../tiles/ReceiptViewTile';
import ButtonModalContainer from '../../modals/ButtonModalContainer';
import ReceiptCreationModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptCreationModalBody';
import ReceiptDeletionModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptDeletionModalBody';
import ReceiptSearchModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptSearchModalBody';

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

const ReceiptHub = ({
  receiptData = {},
  receipts = [],
  onSubmit = () => null,
  onCategoryChange = () => null,
  categories = [],
  tags = [],
  item = null,
  items = [],
  onItemChange = () => null,
  onChange = () => null,
  onItemNumberInputChange = () => null,
  onItemSubmission = () => null,
  onDeletion = () => null,
}) => {

  return (
    <Box>
      <Heading as='h2' fontSize='3xl' align='center' py='24px'>Receipt HUB</Heading>
      <Flex direction='column' justify='start' gap={4}>
        <ReceiptViewTile hub receipts={receipts} />
        <SimpleGrid columns={2} gap={2} mt='24px'>
          <ButtonModalContainer
            btnVariant='solid'
            colorScheme='purple'
            btnText='Create'
            modalBody={
              <ReceiptCreationModalBody
                categories={categories}
                item={item}
                items={items}
                tags={tags}
                onCategoryChange={onCategoryChange}
                onItemChange={onItemChange}
                onChange={onChange}
                onItemNumberInputChange={onItemNumberInputChange}
                onItemSubmission={onItemSubmission} />
            }
            modalTitle='Receipt Creation'
            modalSize='xl'
            modalPrimaryBtnText='Save Changes'
            disabled={!receiptData?.name || !receiptData?.locationName || !receiptData?.date || !receiptData?.items}
            onPrimaryClick={onSubmit}
            hasCancelBtn
            hasPrimaryBtn />
          <ButtonModalContainer
            btnVariant='solid'
            colorScheme='purple'
            btnText='Delete'
            onDeletion={onDeletion}
            modalBody={<ReceiptDeletionModalBody onDeletion={onDeletion} receipts={receipts} />}
            modalTitle='Delete Receipt'
            modalSize='lg'
            modalPrimaryBtnText='Save Changes'
            hasCancelBtn={false}
            hasPrimaryBtn={false} />
        </SimpleGrid>
        <ButtonModalContainer
          btnVariant='solid'
          colorScheme='purple'
          btnText='Find Receipt'
          modalBody={<ReceiptSearchModalBody receipts={receipts} />}
          modalTitle='Find Receipt:'
          modalSize='lg'
          modalPrimaryBtnText='Select Receipt'
          hasCancelBtn={false}
          hasPrimaryBtn={false} />
      </Flex>
    </Box>
  );
}

export default ReceiptHub;