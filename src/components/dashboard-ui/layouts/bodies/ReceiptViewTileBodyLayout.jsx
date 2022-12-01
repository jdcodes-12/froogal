import ItemListTile from '../../tiles/ItemListTile';
import  { FiPlus } from 'react-icons/fi';
import  { 
  Flex,
  Badge,
  Center,
  Text,
  Stat,
  StatNumber,
  Tag,
  TagLabel,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';


const ReceiptViewTileBodyLayout = ({
  receipts = []
}) => {
  const receipt = receipts.length > 0 ? receipts[0] : {};
  const date = receipt?.date 
    ? typeof receipt.date === 'string' 
    ? new Date(receipt?.date).toDateString() 
    : receipt.date.toDate().toDateString() 
    : null;

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Flex direction='column' px='32px'>
      <Flex justify='start' align='center'>
        <Text fontSize='2xl'>{ receipt.name ?? "Placeholder Receipt"}</Text>
      </Flex>

      <Flex 
        justify='space-between' 
        align='center' 
        mb='24px' 
        mt='16px'
        borderBottom='1px' 
        borderBottomColor ='purple.300'
        borderTop='1px' 
        borderTopColor ='purple.300'
        py='8px'>
        <Badge 
          fontSize='md'
          color={badgeColor}
          bg={badgeBg}
          py='5px' 
          px='16px' 
          rounded='md'>
          <Center>{ receipt.locationName ?? "Location"}</Center>
        </Badge>
        <Text fontSize='xl' fontWeight='medium'>{ date ?? new Date().toDateString()}</Text>
      </Flex>

      <Flex direction='column' justify='space-between' align='center' mb='24px'>
        <Flex w='full' justify='space-between' align='center'>
          <Text fontSize='2xl' fontWeight='medium'>Items:</Text>
          <Text fontSize='2xl' fontWeight='semibold'>{ receipt.numItems ?? 0 }</Text>
        </Flex>
        <Flex direction='column' align='start' w='full' pt='16px'>
        <Flex w='full' pt='16px' flexWrap='wrap' justify='start' gap='8px' align='center'>
          <Text fontSize='2xl' fontWeight='medium'>Tags:</Text>
            { receipt?.tags?.length > 0 
              ? receipt?.tags.map((tag, index) => {
                return (<Tag 
                  key={index}
                  py='12px' 
                  colorScheme='purple' 
                  fontSize='md' 
                  rounded='full' 
                  fontWeight='semibold' 
                  shadow='sm'
                  variant='subtle'>
                  <TagLabel>{tag.name}</TagLabel>
                </Tag>)})
            : null }
          </Flex>
        </Flex>
      </Flex>

      <ItemListTile maxHeight='200px' listType='item' collection={receipt?.items} />

      <Flex justify='space-between' 
            align='center' 
            pt='16px' 
      >
        <Text fontSize='2xl' fontWeight='medium'>Total: </Text>
        <Box pt='16px'>
          <Stat fontSize='2xl' fontWeight='medium'>
            <StatNumber>{ `$ ${receipt.totalPrice ?? "0.00"}` }</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ReceiptViewTileBodyLayout;