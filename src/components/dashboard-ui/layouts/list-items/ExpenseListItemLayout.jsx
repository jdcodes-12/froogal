import  { Box,
          Flex,
          Text,
          Stat,
          StatNumber,
          Badge,
          Center,
          useColorModeValue,
        } from '@chakra-ui/react'

const ExpenseListItemLayout = ({ expenseDueDate, expenseName, expensePrice, status}) => {

  const badgeBgColor = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');

  return (
    <Box>
      <Flex
        justify='space-between' 
        align='center' 
        w='full' 
        px='12px' 
        py='8px' 
        borderBottom='1px' 
        borderBottomColor={borderColor}
      >
        <Flex direction='column' align='start'>
          <Text fontSize='md' fontWeight='hairline'>{expenseDueDate}</Text>
          <Text fontSize='2xl' fontWeight='medium'>{expenseName}</Text>
        </Flex>
        <Flex alignSelf='end' direction='column'>
          {/* ColorModeValue HEre */}
          <Badge fontSize='sm' bg={badgeBgColor} color={badgeColor}>
            <Center>
              {status}
            </Center>
          </Badge>
          <Stat fontSize='lg' fontWeight='medium'>
            <StatNumber>$ {(expensePrice).toFixed(2)}</StatNumber>
          </Stat>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ExpenseListItemLayout;