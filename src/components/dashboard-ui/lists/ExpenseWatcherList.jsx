import React from 'react';
import {  Box,
          SimpleGrid,
          Heading,
          Text,
          Flex,
          useColorModeValue
       } from '@chakra-ui/react';
import ExpenseItemTile from '../tiles/ExpenseItemTile';
import { ExpenseCreationModalBody } from '../../modals/modal-bodies/expense-bodies/ExpenseCreationModalBody';
import ButtonModalContainer from '../../modals/ButtonModalContainer';
       
/*
* The ExpenseWatcherList should only render 
* 5 most recent receipts by default.
* The list should only show 5 ExpenseItemTile.
*/
const ExpenseWatcherList = ({ 
  expenses = []
}) => {
  const borderColor = useColorModeValue('brand.lightmode.gray.50', 'brand.darkmode.gray.900');

  return (
    <Box ml='16px'>
      <Heading py='8' fontSize='3xl' align='center'>Expenses</Heading>
      <SimpleGrid columns={2} spacing='10px'>
        { expenses.length > 0 
          ? expenses.map((expense, index) => {
            <ExpenseItemTile key={index} expense={expense} width='95%'/>
          })
          : null }
      </SimpleGrid>
      { expenses.length == 0 
      ? (
        <Flex direction='column' align='center' justify='center' gap={3}>
            <Box 
              border='1px' 
              borderColor={borderColor} 
              rounded='md' 
              w='full' 
              textAlign='center' 
              shadow='md' 
              mb='20px'>
              <Text shadow='inner' fontSize='xl' fontWeight='semibold' p='20px' w='full'>No Expenses Yet</Text>
            </Box>
            <ButtonModalContainer
              btnVariant='solid' 
              colorScheme='purple' 
              btnText='Create an Expense?' 
              modalBody={<ExpenseCreationModalBody />} 
              modalTitle='Expense Creation'
              modalSize='xl'
              modalPrimaryBtnText='Save Changes'
              hasCancelBtn
              hasPrimaryBtn
              width='full' />
          </Flex>
        )
      : null}
    </Box>
  );
}

export default ExpenseWatcherList;