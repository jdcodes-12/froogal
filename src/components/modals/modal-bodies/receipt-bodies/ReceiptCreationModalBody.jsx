import  { React, useContext, useState }from 'react';
import { AuthContext } from '../../../context/authContext';
import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';
import { getCategories } from '../../../../utils/database-functions/getCategories';
import { AddCategoryDropdown } from '../../../dashboard-ui/dropdowns/AddCategoryDropdown';
import { FiCalendar } from 'react-icons/fi';

import { Flex,
         Input,
         FormControl,
         FormLabel,
         Tag,
         TagLabel,
         InputRightElement,
         Text,
         InputGroup,
  } from '@chakra-ui/react';
import { useEffect } from 'react';

const receiptItems = [
  { name: 'Ear buds', quantity: 1, unitPrice: 24.99},
  { name: 'Phone Charger', quantity: 1, unitPrice: 9.75},
  { name: 'Candy Bars', quantity: 4, unitPrice: 1.99},
  { name: 'Onions', quantity: 3, unitPrice: 0.89},
  { name: 'Apples', quantity: 10, unitPrice: 0.75},
];

const ReceiptCreationModalBody = ({
  onChange = () => null,
  onReceiptCreate = () => null,
}) => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const categoryChangeHandler = (e) => {
    setData((prev) => ({
      ...prev, 
      tags: e.map((tag) => ({
        name: tag
      }))}));
  };

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

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
          <Input name="name" onChange={handleChange} placeholder='Receipt-01' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location: </FormLabel>
          <Input name='locationName' onChange={handleChange} placeholder='Location Name' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Date: </FormLabel>
          <InputGroup>
            <Input name='date' onChange={handleChange} type='date' />
            <InputRightElement children={<FiCalendar color='green.500' />} />
          </InputGroup>
        </FormControl>
        
        <FormLabel>Items: </FormLabel>
        <ItemListTile listType='item' collection={receiptItems} />

        <Flex justify='start'>
          <AddCategoryDropdown onChange={categoryChangeHandler} categories={categories}/>
        </Flex>
        <Flex direction='row'flexWrap='wrap' justify='start' align='start'>
          <Text fontSize='2xl' ml='5px' mt='5px'borderBottom='1px' borderColor='purple.300'>Tags:</Text>
          {data?.tags?.length > 0 ? data.tags.map((tag) => {
            return (
              <Tag
                ml='5px'
                mt='5px'
                py='12px'
                colorScheme='purple' 
                fontSize='md' 
                rounded='full' 
                fontWeight='semibold' 
                shadow='sm'
                variant='subtle'>
                <TagLabel>{tag.name}</TagLabel>
              </Tag>
              );
          }) : null}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ReceiptCreationModalBody;