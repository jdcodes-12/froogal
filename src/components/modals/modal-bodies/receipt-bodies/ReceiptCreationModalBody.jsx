import  { React, useContext, useState }from 'react';
import { AuthContext } from '../../../context/authContext';
import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';
import { getCategories } from '../../../../utils/database-functions/getCategories';
import { FiPlus } from 'react-icons/fi';

import { Flex,
         Heading,
         Input,
         FormControl,
         FormLabel,
         Tag,
         TagLabel,
         Button,
         Text,
       } from '@chakra-ui/react';
import { useEffect } from 'react';

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
  const [categories, setCategories] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategories(currentUser?.uid);
      setCategories(categories);
    }; 
    fetchData();
  }, []);

  return (
   <Flex direction='column' justify='start' align='start' px='8px'>
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
            { 

            }
            <Button 
               p='12px'
               colorScheme='purple'
               rounded='full'
               fontSize='md'
               border='1px'
               variant='ghost'
               fontWeight='semibold'
               onClick={() => {
                console.log('clicked');
               }}
               shadow='sm'
               >
                  <FiPlus />
              </Button>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  );
}

export default ReceiptCreationModalBody;