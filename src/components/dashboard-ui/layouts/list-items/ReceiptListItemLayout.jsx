import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber,
          useColorModeValue,
        } from '@chakra-ui/react'

const ReceiptListItemLayout = ({ receipt }) => {
  const { receiptDate, receiptName, receiptTotalPrice} = receipt;
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');

  // Does key need to be here or on the outside of the list?
  return (
    <Box key={receipt.id}>
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
          <Text fontSize='md' fontWeight='hairline'>{receiptDate}</Text>
          <Text fontSize='2xl' fontWeight='medium'>{receiptName}</Text>
        </Flex>
        <Box alignSelf='end'>
          <Stat fontSize='lg' fontWeight='medium'>
            <StatNumber>$ {(receiptTotalPrice).toFixed(2)}</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Box>
  );
}

export default ReceiptListItemLayout;