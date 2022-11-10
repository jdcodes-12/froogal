import React from 'react';
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
    <Box mx='50px'>
    <Flex direction='column' px='20px'>
      <Flex justify='space-between' align='center' mb='24px'>
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
        <Text w='full' ml='5px' fontSize='xl' fontWeight='medium'>{date}</Text>
      </Flex>
      <Flex direction='column'>
        <Text w='full' fontSize='2xl' textAlign='center' fontWeight='medium'>Total Items: {receipt.numItems}</Text>
            <Stat w='full'>
              <StatNumber fontSize='4xl'>${" "}{receipt.totalPrice}</StatNumber>
            </Stat>
      </Flex>
      <Flex justify='start' flexWrap='wrap' align='end' gap={3}>
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
            </Tag> );
        }) 
        : <Text fontWeight='hairline' fontSize='xl'>No Tags Present</Text>}
      </Flex>
    </Flex>
    </Box>
  );
}

export default ReceiptItemBodyLayout;