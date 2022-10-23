import React from 'react';

import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';

import { FiSearch } from 'react-icons/fi';

import { Flex,
         FormControl,
         Input,
         InputGroup,
         InputLeftElement,
       } from '@chakra-ui/react';

const userReceiptCollection = [
  { receiptDate: '10/24/22', receiptName: 'Amazon.com', receiptTotalPrice: 24.99},
  { receiptDate: '10/25/22', receiptName: 'Walmart.com', receiptTotalPrice: 164.97},
  { receiptDate: '10/26/22', receiptName: 'Udemy.com', receiptTotalPrice: 19.99},
];

const ReceiptSearchModalBody = () => {
  return (
   <Flex direction='column' justify='left' px='8px'>
      <FormControl my='16px'>
        <InputGroup>
          <InputLeftElement children={<FiSearch size='22px' />} />
          <Input placeholder='Search receipts' variant='filled' borderRadius='xl' fontSize='xl'/>
        </InputGroup>
      </FormControl>
      <ItemListTile listType='receipt' collection={userReceiptCollection} />
   </Flex>
  );
}

export default ReceiptSearchModalBody;