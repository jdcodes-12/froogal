import React from 'react';

import ItemListTile from '../../tiles/ItemListTile';

import  { FiPlus } from 'react-icons/fi';

import  { Flex,
          Badge,
          Center,
          Text,
          Stat,
          StatNumber,
          Tag,
          TagLabel,
          Box,
          useColorModeValue,
        } from '@chakra-ui/react';

const receiptItems = [
  { itemName: 'Ear buds', itemQty: 1, itemUnitPrice: 24.99},
  { itemName: 'Phone Charger', itemQty: 1, itemUnitPrice: 9.75},
  { itemName: 'Candy Bars', itemQty: 4, itemUnitPrice: 1.99},
  { itemName: 'Onions', itemQty: 3, itemUnitPrice: 0.89},
  { itemName: 'Apples', itemQty: 10, itemUnitPrice: 0.75},
];

const ReceiptViewTileBodyLayout = () => {

  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

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
              color={badgeColor}
              bg={badgeBg}
              py='2px' 
              px='16px' 
              rounded='sm'  
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

      <ItemListTile listType='item' collection={receiptItems} />

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