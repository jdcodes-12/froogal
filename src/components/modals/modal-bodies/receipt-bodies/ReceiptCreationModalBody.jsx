import  { React, useContext }from 'react';
import { AuthContext } from '../../../context/authContext';
import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';

import { FiPlus } from 'react-icons/fi';

import { Flex,
         Heading,
         Input,
         FormControl,
         FormLabel,
         Tag,
         TagLabel,
         Text,
       } from '@chakra-ui/react';

const receiptItems = [
  { itemName: 'Ear buds', itemQty: 1, itemUnitPrice: 24.99},
  { itemName: 'Phone Charger', itemQty: 1, itemUnitPrice: 9.75},
  { itemName: 'Candy Bars', itemQty: 4, itemUnitPrice: 1.99},
  { itemName: 'Onions', itemQty: 3, itemUnitPrice: 0.89},
  { itemName: 'Apples', itemQty: 10, itemUnitPrice: 0.75},
];

const ReceiptCreationModalBody = ({
  onChange = () => null
}) => {
  const { currentUser } = useContext(AuthContext);
  const userID = currentUser?.uid;

  return (
   <Flex direction='column' justify='start' align='start' px='8px'>
      <Heading as='h2' fontSize='3xl' py='24px'>Receipt Info:</Heading>

      <Flex direction='column' w='full' gap='16px'>
        <FormControl>
          <FormLabel>Name: </FormLabel>
          <Input placeholder='Receipt-01' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location: </FormLabel>
          <Input placeholder='Amazon.com' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Date: </FormLabel>
          <Input placeholder='12/12/22' />
        </FormControl>
        
        <FormLabel>Items: </FormLabel>
        <ItemListTile listType='item' />

        <Flex direction='column' justify='start' align='start'>
          <Text fontSize='2xl' borderBottom='1px' borderColor='purple.300'>Tags:</Text>
          <Flex justify='start' align='end' gap='8px' pt='24px'>
            <Tag px='8px' 
                  py='12px' 
                  colorScheme='purple' 
                  fontSize='md' 
                  rounded='full' 
                  fontWeight='semibold' 
                  variant='outline'>
              <TagLabel>Category</TagLabel>
            </Tag>
            <Tag px='8px' 
                  py='12px' 
                  colorScheme='teal' 
                  fontSize='md' 
                  rounded='full' 
                  fontWeight='semibold' 
                  variant='outline'>
              <TagLabel as={FiPlus} fontSize='md' />
            </Tag>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  );
}

export default ReceiptCreationModalBody;