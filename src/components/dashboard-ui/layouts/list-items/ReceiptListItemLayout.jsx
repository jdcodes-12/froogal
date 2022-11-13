import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber,
          useColorModeValue,
        } from '@chakra-ui/react'

const ReceiptListItemLayout = ({ receiptDate, receiptName, receiptTotalPrice}) => {

  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');

  return (
    <Box>
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