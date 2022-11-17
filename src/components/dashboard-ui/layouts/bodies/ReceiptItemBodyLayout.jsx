import  {
  Box,
  Flex,
  Badge,
  Center,
  Text,
  Stat,
  StatNumber,
  Tag,
  TagLabel,
  useColorModeValue,
} from '@chakra-ui/react';

const ReceiptItemBodyLayout = ({ 
  receipt = [],
}) => {
  const date = receipt?.date 
    ? typeof receipt.date === 'string' 
    ? new Date(receipt?.date).toDateString() 
    : receipt.date.toDate().toDateString() 
    : null;

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Box px='24px'>
      <Flex direction='column'>
        <Flex justify='space-between' py='8px'>
          <Box>
            <Badge  
              fontSize='md'
              color={badgeColor}
              bg={badgeBg}
              pt='5px'
              textAlign='center'
              px='10px' 
              rounded='md'
              w=''>
              <Center>
                <Text>{receipt.locationName}</Text>
              </Center>
            </Badge>
          </Box>
          <Box>
            <Text w='full' ml='5px' fontSize='xl' fontWeight='medium'>{date}</Text>
          </Box>
        </Flex>


        <Flex direction='row' justify='space-between' align='center' py='32px'>
          <Box>
            <Text fontSize={[null, null, '2xl', null]} fontWeight='light'>Total Items: {receipt.numItems}</Text>
          </Box>
          {/* Box needs to be wrapped around Start or layout of card gets messy */}
          <Box>
            <Stat>
              <StatNumber fontSize={[null, null, '3xl', '4xl']}>${" "}{receipt.totalPrice}</StatNumber>
            </Stat>
          </Box>
        </Flex>

        <Flex justify='start' flexWrap='wrap' align='end' gap={3} pb='8px'>
          {receipt?.tags?.length > 0 
          ? receipt?.tags.map((tag, index) => {
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
          }) 
          : <Text fontWeight='hairline' fontSize='xl'>No Tags Present</Text>}
        </Flex>
      </Flex>
    </Box>
  );
}

export default ReceiptItemBodyLayout;