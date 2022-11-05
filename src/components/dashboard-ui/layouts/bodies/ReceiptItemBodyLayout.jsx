import React from 'react';

import  { FiPlus } from 'react-icons/fi';

import  { Spacer,
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
  receipt = []
}) => {
  const date = receipt.date ? receipt.date.toDate().toDateString() : null;
  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Flex direction='column' px='32px'>
      <Flex justify='space-between' align='center' mb='24px'>
        <Badge  fontSize='md'
                color={badgeColor}
                bg={badgeBg}
                py='2px'
                my='auto'
                textAlign='center'
                px='10px' 
                rounded='md'
                w='120px'>
          <Center>
            <Text>{receipt.locationName}</Text>
          </Center>
        </Badge>
        <Text fontSize='xl' fontWeight='medium'>{date}</Text>
      </Flex>
      <Flex justify='space-between' align='center' mb='24px'>
        <Text fontSize='2xl' fontWeight='medium'>Total Items: {receipt.numItems}</Text>
          <Spacer/>
          <Flex>
            <Stat>
              <StatNumber fontSize='4xl'>${" "}{receipt.totalPrice}</StatNumber>
            </Stat>
          </Flex>
      </Flex>
      <Flex justify='start' align='end' gap='8px' pt='24px'>
        <Tag  px='8px' 
              py='12px' 
              colorScheme='purple' 
              fontSize='md' 
              rounded='full' 
              fontWeight='semibold' 
              variant='outline'>
          <TagLabel>Category</TagLabel>
        </Tag>
        <Tag  px='8px' 
              py='12px' 
              colorScheme='purple' 
              fontSize='md' 
              rounded='full' 
              fontWeight='semibold' 
              variant='outline'>
          <TagLabel>Under $100</TagLabel>
        </Tag>
        <Tag  px='8px' 
              py='12px' 
              colorScheme='purple' 
              fontSize='md' 
              rounded='full' 
              fontWeight='semibold' 
              variant='outline'>
          <TagLabel>Custom</TagLabel>
        </Tag>
        <Tag  px='8px' 
              py='12px' 
              colorScheme='teal' 
              fontSize='md' 
              rounded='full' 
              fontWeight='semibold' 
              variant='outline'>
          <TagLabel as={FiPlus} fontSize='md' />
        </Tag>
      </Flex>
    </Flex>
  );
}

export default ReceiptItemBodyLayout;