import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import { getReceipts } from '../../../../utils/database-functions/getReceipts';
import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';
import { FiSearch } from 'react-icons/fi';
import { 
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const userReceiptCollection = [
  { id: 1, receiptDate: '10/24/22', receiptName: 'Amazon.com', receiptTotalPrice: 24.99},
  { id: 2, receiptDate: '10/25/22', receiptName: 'Walmart.com', receiptTotalPrice: 164.97},
  { id: 3, receiptDate: '10/26/22', receiptName: 'Udemy.com', receiptTotalPrice: 19.99},
];

const ReceiptSearchModalBody = () => {
  const [searchField, setSearchField] = useState('');
  const [userReceiptsList, setUserReceipts] = useState([]);
  const [filteredReceipts, setFilteredReceipts] = useState(userReceiptsList);

  // const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // const getReceiptsFromDB = async () => {
    //   const receipts = await getReceipts(currentUser.id);
    //   console.log(receipts);
    //   setUserReceipts(receipts);
    // }
    
    // getReceiptsFromDB();
    setUserReceipts(userReceiptCollection);
  }, []);

  useEffect(() => {
    const newFilteredList = userReceiptsList.filter((receipt) => {
      return receipt.receiptName.toLowerCase().includes(searchField);
    });

    setFilteredReceipts(newFilteredList);
  }, [searchField, userReceiptsList]);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
  }

  return (
   <Flex direction='column' justify='left' px='8px'>
      <FormControl my='16px'>
        <InputGroup>
          <InputLeftElement children={<FiSearch size='22px' />} />
          <Input placeholder='Search a receipt to view' variant='filled' borderRadius='xl' fontSize='xl' onChange={onSearchChange} />
        </InputGroup>
      </FormControl>
      <ItemListTile listType='receipt' collection={filteredReceipts} />
   </Flex>
  );
}

export default ReceiptSearchModalBody;

