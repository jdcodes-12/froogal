import React from 'react';

import ItemListTile from '../../tiles/ItemListTile';

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
          Box,
        } from '@chakra-ui/react';

const ReceiptViewTileBodyLayout = () => {
  return (
    <Flex direction='column' px='32px'>
      <Flex justify='start' align='center'>
        <Text fontSize='2xl'>Receipt ID here</Text>
      </Flex>

      <Flex justify='space-between' 
            align='center' 
            mb='24px' 
            mt='16px'
            borderBottom='1px' borderBottomColor ='purple.300'
            borderTop='1px' borderTopColor ='purple.300'
            py='8px'
      >
        <Badge fontSize='md'
              colorScheme='purple' 
              py='2px' 
              px='16px' 
              rounded='sm' 
              variant='subtle' 
        >
          <Center>Target</Center>
        </Badge>
        <Text fontSize='xl' fontWeight='medium'>10/20/22</Text>
      </Flex>

      <Flex direction='column' justify='space-between' align='center' mb='24px'>
        <Flex w='full' justify='space-between' align='center'>
          <Text fontSize='2xl' fontWeight='medium'>Items:</Text>
          <Text fontSize='2xl' fontWeight='semibold'>9</Text>
        </Flex>
        <Flex direction='column' align='start' w='full' pt='16px'>
          <Text fontSize='2xl' fontWeight='medium'>Categories:</Text>
          <Flex w='full' pt='16px' justify='start' gap='8px' align='center'>
              <Tag  px='8px' 
                    py='12px' 
                    colorScheme='purple' 
                    fontSize='md' 
                    rounded='full' 
                    fontWeight='semibold' 
                    variant='outline'
              >
                <TagLabel>Fruits</TagLabel>
              </Tag>
              <Tag  px='8px' 
                    py='14px' 
                    colorScheme='purple' 
                    fontSize='md' 
                    rounded='full' 
                    fontWeight='semibold' 
                    variant='outline'
              >
                <TagLabel>Misc</TagLabel>
              </Tag>
              <Tag  px='8px' 
                    py='12px' 
                    colorScheme='purple' 
                    fontSize='md' 
                    rounded='full' 
                    fontWeight='semibold' 
                    variant='outline'
              >
                <TagLabel>Category</TagLabel>
              </Tag>
              <Tag  px='8px' 
                    py='12px' 
                    colorScheme='teal' 
                    fontSize='md' 
                    rounded='full' 
                    fontWeight='semibold' 
                    variant='outline'
              >
                  <TagLabel as={FiPlus} fontSize='md' />
              </Tag>
          </Flex>
        </Flex>
      </Flex>

      <ItemListTile />

      <Flex justify='space-between' 
            align='center' 
            pt='16px' 
      >
        <Text fontSize='2xl' fontWeight='medium'>Total: </Text>
        <Box pt='16px'>
          <Stat fontSize='2xl' fontWeight='medium'>
            <StatNumber>$ 34.29</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ReceiptViewTileBodyLayout;