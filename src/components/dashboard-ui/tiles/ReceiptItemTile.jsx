import React from 'react';

import ItemTileContainer from '../../containers-ui/item-title-container';

import { FiPlus } from 'react-icons/fi';

import { Text,
         Flex,
         Spacer,
         Badge,
         Center,
         Stat,
         StatNumber,
         Tag,
         TagLabel,
         TagRightIcon,
       } from '@chakra-ui/react';

const ReceiptItemTile = (props) => {
  const { width } = props;
  return (
   <ItemTileContainer width={width}>
      <Flex direction='column' px='32px'>
        <Flex justify='space-between' align='center' mb='24px'>
          <Badge fontSize='md'
                 colorScheme='purple' 
                 py='2px' 
                 px='16px' 
                 rounded='sm' 
                 variant='subtle' 
                 w='120px'>
            <Center>Nike</Center>
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
          <Tag px='8px' 
               py='12px' 
               colorScheme='purple' 
               fontSize='md' 
               rounded='full' 
               fontWeight='semibold' 
               variant='outline'>
            <TagLabel>Category</TagLabel>
          </Tag>
          <Tag px='8px' 
               py='12px' 
               colorScheme='purple' 
               fontSize='md' 
               rounded='full' 
               fontWeight='semibold' 
               variant='outline'>
            <TagLabel>Under $100</TagLabel>
          </Tag>
          <Tag px='8px' 
               py='12px' 
               colorScheme='purple' 
               fontSize='md' 
               rounded='full' 
               fontWeight='semibold' 
               variant='outline'>
            <TagLabel>Custom</TagLabel>
          </Tag>
          <Tag px='8px' 
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
   </ItemTileContainer>
  );
}

export default ReceiptItemTile;