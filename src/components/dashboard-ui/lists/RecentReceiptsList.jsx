import React from 'react';

import ReceiptItemTile from '../tiles/ReceiptItemTile';

import { Box,
         Flex,
         Heading,
         Text,
       } from '@chakra-ui/react';
import ButtonModalContainer from '../../modals/ButtonModalContainer';
import ReceiptCreationModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptCreationModalBody';

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
            width='full' />
        </>
      );
    case 1: 
      return ( 
        <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
        );
    case 2: 
      return ( <> 
          <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
          <ReceiptItemTile receipt={receipts[1]} width='95%' /> 
        </> );
    case 3: 
    return ( <> 
        <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
        <ReceiptItemTile receipt={receipts[1]} width='95%' />
        <ReceiptItemTile receipt={receipts[2]} width='95%' /> 
      </> );
    default: 
    return ( <> 
      <ReceiptItemTile receipt={receipts[0]} width='95%' /> 
      <ReceiptItemTile receipt={receipts[1]} width='95%' />
      <ReceiptItemTile receipt={receipts[2]} width='95%' /> 
    </> );
  }
}

const RecentReceiptsList = ({
  receipts = [],
}) => {

  return (
    <Box>
      <Heading py='6' fontSize='3xl' align='center'>Recent Receipts</Heading>
      <Flex direction='column' gap='8' align='center'>
        { generateReceiptTile(receipts) }
       </Flex>
    </Box>
  );
}

export default RecentReceiptsList;