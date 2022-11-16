import { useState, useContext } from 'react';
import { AuthContext  } from '../../context/authContext';

import { getColorPerFinanceMode } from '../../../utils/frontend-functions/utils';
import { addCategory } from '../../../utils/database-functions/addCategory';

import ButtonModalContainer from '../../modals/ButtonModalContainer';
import AddCategoryModalBody from '../../modals/modal-bodies/AddCategoryModalBody';

import { 
  Flex,
  Heading,
  Badge,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';


const data = [
  { category: 'Transportation', A: 34, fullMark: 120 },
  { category: 'Food', A: 75, fullMark: 120 },
  { category: 'Utility', A: 66, fullMark: 120 },
  { category: 'Entertainment', A: 60, fullMark: 120 },
  { category: 'Misc.', A: 67, fullMark: 120 },
  { category: 'Rent', A: 25, fullMark: 120 },
];

const CategoryBreakdownChart = ({ mode = '' }) => {
  const { currentUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [category, setCategory] = useState(null);
  
  const badgeBg = useColorModeValue('brand.lightmode.secondary.base', 'brand.darkmode.secondary.base');
  const badgeColor = useColorModeValue('brand.white.base', 'brand.darkmode.gray.700');

  const onChange = (e) => {
    setCategory({[e.target.name]: e.target.value});
  };

  const onSubmission = () => {
    addCategory({ ...category, userID: currentUser.uid });
  };

  const isDisabled = (value) => {
    setDisabled(value);
  }

  return (
    <Flex direction='column' justify='start'>
      <Flex justify='space-between' align='center' px='8px'>
        <Heading as='h2' fontSize='2xl'>Category Breakdown Chart</Heading>
        <Badge 
          fontSize='xl' 
          colorScheme={getColorPerFinanceMode(mode)}
          color={badgeColor}
          bg={badgeBg}
          pt='5px' 
          px='16px' 
          rounded='md'
          >
            <Center>{mode}</Center>
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
      
      <ButtonModalContainer 
        colorScheme='purple' 
        btnVariant='outline' 
        btnText='Add Category' 
        width='full'
        modalTitle='Add Category'
        modalBody={<AddCategoryModalBody isDisabled={isDisabled} onChange={onChange} />}
        modalSize='lg'
        onPrimaryClick={onSubmission}
        modalPrimaryBtnText='Save Changes'
        hasCancelBtn={true}
        hasPrimaryBtn={true}
        disabled={disabled}/>
    </Flex>
  );
}

export default CategoryBreakdownChart;
