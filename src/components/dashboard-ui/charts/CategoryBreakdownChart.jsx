import React from 'react';

import ButtonModalContainer from '../../modals/ButtonModalContainer';
import AddCategoryModalBody from '../../modals/modal-bodies/AddCategoryModalBody';

import { Radar, 
         RadarChart, 
         PolarGrid, 
         PolarAngleAxis, 
         PolarRadiusAxis,
         ResponsiveContainer
       } from 'recharts';

import { Flex,
         Heading,
         Badge,
         Center,
       } from '@chakra-ui/react';

const data = [
  {
    category: 'Food',
    A: 75,
    fullMark: 120,
  },
  {
    category: 'Entertainment',
    A: 60,
    fullMark: 120,
  },
  {
    category: 'Utility',
    A: 66,
    fullMark: 120,
  },
  {
    category: 'Transportation',
    A: 34,
    fullMark: 120,
  },
  {
    category: 'Rent',
    A: 25,
    fullMark: 120,
  },
  {
    category: 'Miscellaneous',
    A: 67,
    fullMark: 120,
  }
];

const CategoryBreakdownChart = () => {
  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Category Breakdown Chart</Heading>
        <Badge fontSize='xl' 
                colorScheme='purple' 
                py='2px' 
                px='16px' 
                rounded='sm'
                variant='subtle'
          >
            <Center>Weekly</Center>
          </Badge>
      </Flex>

      <ResponsiveContainer width='100%' height={400}>
        <RadarChart
          margin={{
            top: 30,
            right: 50,
            left: 20,
            bottom: 5,
          }}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis />
          <Radar
            wordSpacing= '20px'
            name="user"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      <ButtonModalContainer colorScheme='purple' 
                            btnVariant='outline' 
                            btnText='Add Category' 
                            width='full'
                            modalTitle='Add Category'
                            modalBody={<AddCategoryModalBody />}
                            modalSize='lg'
                            modalPrimaryBtnText='Save Changes'
                            hasCancelBtn={true}
                            hasPrimaryBtn={true}/>
    </Flex>
  );
}

export default CategoryBreakdownChart;
