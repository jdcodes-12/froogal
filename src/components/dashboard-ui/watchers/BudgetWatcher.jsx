import React from 'react';
import { addFinancialSettings } from '../../../utils/database-functions/addFinancialSettings';
import ButtonModalContainer from '../../modals/ButtonModalContainer';
import AdjustBudgetModalBody from '../../modals/modal-bodies/AdjustBudgetModalBody';
import { getColorPerFinanceMode } from '../../../utils/frontend-functions/utils';
import { Box,
         Flex,
         Heading,
         Badge,
         Center,
         Stat,
         StatNumber,
         Text,
         propNames,
         } from '@chakra-ui/react';

const BudgetWatcher = ({ 
  onChange = () => null,
  financialSettings = {}, 
  mode = '',
})  => {
  const financeMode = mode + 'Budget';
  const budget = financialSettings?.[financeMode];

  const onSubmission = async (e) => {
    e.preventDefault();
    const res = await addFinancialSettings(financialSettings?.userID, financialSettings, financialSettings?.id);
  }

  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Budget For Period</Heading>
        <Badge fontSize='xl' 
               colorScheme={getColorPerFinanceMode(mode)} 
               py='2px' 
               px='16px' 
               rounded='sm'
               variant='subtle'
          >
            <Center>{mode}</Center>
          </Badge>
      </Flex>
      <Flex justify='space-between' align='center' pl='8px' pr='12px' pt='64px'>
        <Text fontSize='6xl'>$</Text>
        <Box>
          <Stat>
            <StatNumber fontSize='6xl'>{budget ?? 0}</StatNumber>
          </Stat>
        </Box>
      </Flex>
      <Flex justify='start' align='center' pl='8px' pr='12px' pt='64px'>
        <ButtonModalContainer 
          colorScheme='purple'
          btnVariant='outline' 
          btnText='Adjust Budget' 
          width='full'
          modalTitle='Adjust Budget'
          modalBody={<AdjustBudgetModalBody onChange={onChange} value={budget} fieldName={`${financeMode}`} mode={mode} />}
          onPrimaryClick={onSubmission}
          modalSize='lg' 
          modalPrimaryBtnText='Save Changes'
          hasPrimaryBtn
          hasCancelBtn
          />
      </Flex>
    </Flex>
  );
}

export default BudgetWatcher;