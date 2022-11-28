import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber,
          useColorModeValue,
        } from '@chakra-ui/react'

const ReceiptListItemLayout = ({ receipt = {}, index }) => {
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');
  const date = receipt?.date 
  ? typeof receipt.date === 'string' 
  ? new Date(receipt?.date).toDateString() 
  : receipt.date.toDate().toDateString() 
  : null;

  const price = receipt?.totalPrice ? parseFloat(receipt.totalPrice) : 0;

  // Does key need to be here or on the outside of the list?
  return (
    <Box key={index}>
      <Flex justify='space-between' 
        align='center' 
        w='full' 
        px='12px' 
        py='8px' 
        borderBottom='1px' 
        borderBottomColor={borderColor}
        borderBottomWidth='50%'
      >
        <Flex direction='column' align='start'>
          <Text fontSize='md' fontWeight='hairline'>{date}</Text>
          <Text fontSize='2xl' fontWeight='medium'>{receipt?.name}</Text>
        </Flex>
        <Box alignSelf='end'>
          <Stat fontSize='lg' fontWeight='medium'>
            <StatNumber>$ {price.toFixed(2)}</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Box>
  );
}

export default ReceiptListItemLayout;