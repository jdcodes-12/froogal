import  { Spacer,
          Flex,
          Badge,
          Center,
          Text,
          Stat,
          StatNumber,
          StatHelpText,
          useColorModeValue,
        } from '@chakra-ui/react';

const ExpenseItemBodyLayout = ({
  expense = null
}) => {
  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');
  const dueDays = expense?.dueDate ? parseInt((expense.dueDate - new Date()) / 86400000) : 0;
  const dueSentence = `${dueDays < 0 ? 'Past due by' : 'Due in'} ${Math.abs(dueDays)} ${dueDays == 1 ? 'day' : 'days'}`
  
  return (
    <Flex direction='column'>
      <Flex direction='column' gap={2} justify='space-between' align='center'>
          <Badge
            fontSize='md' 
            color={badgeColor}
            bg={badgeBg} 
            py='3px' 
            px='15px' 
            rounded='md'
            w='auto'
          >
              <Center>{expense?.isPaid ? 'Paid' : 'Pending'}</Center>
          </Badge>
          <Text fontSize='lg' textAlign='center' fontWeight='medium'>
            {expense?.dueDate ? expense.dueDate.toDateString() : new Date().toDateString().slice(4)}
          </Text>
      </Flex>
      <Flex direction='column' justify='space-between' align='center'>
          <Text fontSize='1xl' fontWeight='medium'>
            {expense?.locationName ? expense.locationName : "Location Name"}
          </Text>
          <Spacer/>
          <Flex>
            <Stat>
                <StatNumber fontSize='2xl'>
                  { expense?.price ? expense.price : 0.00.toFixed(2)}
                  </StatNumber>
            </Stat>
          </Flex>
      </Flex>
      <Flex justify='center' align='center'>
          <Center>
            <Stat>
                <StatHelpText textAlign='center' fontSize='md' fontWeight='hairline'>{dueSentence}</StatHelpText>
            </Stat>
          </Center>
      </Flex>
    </Flex>
  );
}

export default ExpenseItemBodyLayout;