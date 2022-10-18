import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { Box,
  Flex,
  Heading,
  Badge,
  Center,
  Stat,
  StatNumber,
  Button,
} from '@chakra-ui/react';

import UpdateModalButton from '../../modals/UpdateModalButton';


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
      <RadarChart
    cx={200}
    cy={150}
    outerRadius={100}
    width={400}
    height={300}
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
{/*I will update this later, this button will probably have it's own modal since it's function will be
to add categories */}
  <Flex justify='center' align='center'>
        <UpdateModalButton colorScheme='purple' variant='outline' text='Add Category' width='full'/>
      </Flex>
      </Flex>
    
  );
}

export default CategoryBreakdownChart;
