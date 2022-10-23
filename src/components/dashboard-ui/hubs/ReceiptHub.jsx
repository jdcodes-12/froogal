import React from 'react';

import ReceiptViewTile from '../tiles/ReceiptViewTile';
import ButtonModalContainer from '../../modals/ButtonModalContainer';
import ReceiptCreationModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptCreationModalBody';
import ReceiptDeletionModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptDeletionModalBody';
import ReceiptSearchModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptSearchModalBody';

import { Box,
         Flex, 
         Heading,
         SimpleGrid,
       } from '@chakra-ui/react';

const ReceiptHub = () => {
  return (
   <Box>
    <Heading as='h2' fontSize='3xl' align='center' py='24px'>Receipt HUB</Heading>
    <Flex direction='column' justify='start' gap={4}>
      <ReceiptViewTile />
      <SimpleGrid columns={2} gap={2} mt='24px'>
        <ButtonModalContainer  btnVariant='solid' colorScheme='purple' btnText='Create' modalBody={<ReceiptCreationModalBody />} />
        <ButtonModalContainer  btnVariant='solid' colorScheme='purple' btnText='Delete' modalBody={<ReceiptDeletionModalBody />} />
      </SimpleGrid>
      <ButtonModalContainer  btnVariant='solid' colorScheme='purple' btnText='Find Receipt' modalBody={<ReceiptSearchModalBody />}/>
    </Flex>
   </Box>
  );
}

export default ReceiptHub;