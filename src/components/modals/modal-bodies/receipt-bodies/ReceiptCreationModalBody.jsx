import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';
import AddCategoryDropdown from '../../../dashboard-ui/dropdowns/AddCategoryDropdown';
import ButtonModalContainer from '../../ButtonModalContainer';
import ReceiptItemCreationModalBody from './ReceiptItemCreationModalBody';
import { FiCalendar } from 'react-icons/fi';
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Tag,
  TagLabel,
  InputRightElement,
  Text,
  InputGroup,
} from '@chakra-ui/react';

const ReceiptCreationModalBody = ({
  item = null,
  tags = [],
  categories = [],
  items = [],
  onChange = () => null,
  onItemChange = () => null,
  onItemNumberInputChange = () => null,
  onItemSubmission = () => null,
  onCategoryChange = () => null,
}) => {

  return (
    <Flex direction='column' justify='start' align='start' px='8px'>
      <Flex direction='column' w='full' gap='16px'>
        <FormControl isRequired>
          <FormLabel>Name: </FormLabel>
          <Input name="name" onChange={onChange} placeholder='Receipt-01' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location: </FormLabel>
          <Input name='locationName' onChange={onChange} placeholder='Location Name' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Date: </FormLabel>
          <InputGroup>
            <Input name='date' onChange={onChange} type='date' />
            <InputRightElement children={<FiCalendar color='green.500' />} />
          </InputGroup>
        </FormControl>

        <Flex justify='space-between'>
          <FormLabel alignSelf='center' >Items: </FormLabel>
          <ButtonModalContainer
            isCentered
            btnVariant='solid'
            colorScheme='purple'
            btnText='Add items'
            modalBody={<ReceiptItemCreationModalBody onChange={onItemChange} onNumberInputChange={onItemNumberInputChange} />}
            modalTitle='Item Creation'
            modalSize='sm'
            modalPrimaryBtnText='Save Changes'
            onPrimaryClick={onItemSubmission}
            disabled={!item?.name || !item?.quantity || item?.quantity === 0 || !item?.unitPrice || item?.unitPrice === "0.00"}
            hasCancelBtn
            hasPrimaryBtn />
        </Flex>
        <ItemListTile maxHeight='150px' listType='item' collection={items} />

        <Flex justify='start'>
          <AddCategoryDropdown onChange={onCategoryChange} categories={categories} />
        </Flex>
        <Flex direction='row' flexWrap='wrap' justify='start' align='start'>
          <Text fontSize='2xl' ml='5px' mt='5px' borderBottom='1px' borderColor='purple.300'>Tags:</Text>
          {tags?.length > 0 ? tags.map((tag, index) => {
            return (
              <Tag
                key={index}
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