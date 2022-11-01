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

const ReceiptItemBodyLayout = () => {

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  return (
    <Flex direction='column' px='32px'>
      <Flex justify='space-between' align='center' mb='24px'>
        <Badge  fontSize='md'
                color={badgeColor}
                bg={badgeBg}
                py='2px' 
                px='16px' 
                rounded='sm'
                w='120px'>
          <Center>
            <Text>Nike</Text>
          </Center>
        </Badge>
        <Text fontSize='xl' fontWeight='medium'>10/20/22</Text>
      </Flex>
      <Flex justify='space-between' align='center' mb='24px'>
        <Text fontSize='2xl' fontWeight='medium'>Total Items: 9</Text>
          <Spacer/>
          <Flex>
            <Stat>
              <StatNumber fontSize='4xl'>$76.93</StatNumber>
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