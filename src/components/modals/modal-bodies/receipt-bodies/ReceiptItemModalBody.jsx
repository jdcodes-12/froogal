import { FiPlus } from 'react-icons/fi';
import {
  Flex,
  Spacer,
  Box,
  Text,
  Stat,
  StatNumber,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import ItemListTile from '../../../dashboard-ui/tiles/ItemListTile';

const ReceiptItemModalBody = ({ receipt }) => {
  return (
    <Flex direction='column' justify='start' gap='32px'>
      <Flex w='full' align='center' justify='space-between'>
        <Text
          fontSize='xl'
          borderBottom='1px'
          borderColor='purple.300'>Receipt Name:</Text>
        <Text fontSize='xl' fontWeight='normal'>{receipt?.name}</Text>
      </Flex>
      <Flex w='full' align='center' justify='space-between'>
        <Text
          fontSize='xl'
          borderBottom='1px'
          borderColor='purple.300'>Location Purchased:</Text>
        <Text fontSize='xl' fontWeight='normal'>{receipt?.locationName}</Text>
      </Flex>
      <ItemListTile maxHeight='200px' listType='item' collection={receipt?.items} />
      <Flex w='full'
        align='center'
        justify='space-between'
      >
        <Text fontSize='xl'
          borderBottom='1px'
          borderColor='purple.300'>
          Price:
        </Text>
        <Box>
          <Stat>
            <StatNumber>${" "}{receipt?.totalPrice}</StatNumber>
          </Stat>
        </Box>
      </Flex>
      <Flex direction='column' align='start' w='full' pt='16px'>
        <Text fontSize='xl' borderBottom='1px' borderColor='purple.300' mr='2px' >Tags:</Text>
        <Flex flexWrap='wrap' justify='start' align='center' gap={3} pb='8px'>
          {receipt?.tags?.length > 0
            ? receipt?.tags.map((tag, index) => {
              return (
                <Tag
                  key={index}
                  ml='2px'
                  mt='5px'
                  py='12px'
                  colorScheme='purple'
                  fontSize='sm'
                  rounded='full'
                  fontWeight='semibold'
                  shadow='sm'
                  variant='subtle'>
                  <TagLabel>{tag.name}</TagLabel>
                </Tag>
              );
            })
            : <Text fontWeight='hairline' fontSize='xl'>No Tags Present</Text>}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ReceiptItemModalBody;