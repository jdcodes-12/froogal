import { React, useContext, useState, useEffect } from 'react';
import { getFinancialSettings } from '../utils/database-functions/getFinancialSettings';
import CardContainer from '../components/containers-ui/card-body-container'
import ReceiptHub from '../components/dashboard-ui/hubs/ReceiptHub';
import RecentReceiptsList from '../components/dashboard-ui/lists/RecentReceiptsList';
import ExpenseWatcherList from '../components/dashboard-ui/lists/ExpenseWatcherList';
import OverUnderWatcher from '../components/dashboard-ui/watchers/OverUnderWatcher';
import BudgetWatcher from '../components/dashboard-ui/watchers/BudgetWatcher';
import TotalSpendingWatcher from '../components/dashboard-ui/watchers/TotalSpendingWatcher';
import CategoryBreakdownChart from '../components/dashboard-ui/charts/CategoryBreakdownChart';
import BudgetComparerChart from '../components/dashboard-ui/charts/BudgetComparerChart';
import Sidebar from '../components/dashboard-ui/bars/Sidebar';
import { AuthContext } from '../components/context/authContext';


import { Box, 
         Grid,
         GridItem,
       } from '@chakra-ui/react';

const DashboardRoute = () => {
  const { currentUser } = useContext(AuthContext);
  
  const [over, setOver] = useState(false);
  const [financialSettings, setFinancialSettings] = useState({
    id: "",
    userID: currentUser?.uid ?? "",
    monthlyBudget: 0,
    monthlyIncome: 0,
    weeklyBudget: 0,
    weeklyIncome: 0,
    annualBudget: 0,
    annualIncome: 0,
  });
  const [mode, setMode] = useState('weekly');

  useEffect(() => {
    const fetchData = async () => {
      try {
      const data = await getFinancialSettings(currentUser?.uid);
      setFinancialSettings((prev) => ({ ...prev, ...data}));
      } catch (error) {
        console.log(error); 
      }
    };
    fetchData();
  }, []);

  const onChangeHandler = (value) => {
    setFinancialSettings((prev) => ({
      ...prev, ...value
    }));
  };

  const changeMode = (mode) => {
    setMode(mode);
  }
  
  return (
    <Sidebar 
      mode={mode} 
      changeMode={changeMode} 
      onChange={onChangeHandler} 
      userID={currentUser.uid} 
      financialSettings={financialSettings}>
      <Grid 
            display='grid'
            gap='16px'
            margin='2rem'
            gridTemplateColumns='repeat(auto-fit, minmax(400px, 1fr))'
      >
        <GridItem rowSpan={1} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <OverUnderWatcher mode={mode} over={over} />
            </Box>
          </CardContainer>
        </GridItem>
        
        <GridItem rowSpan={1} colSpan={1}  >
         <CardContainer height='100%'>
          <Box px={4}>
            <BudgetWatcher onChange={onChangeHandler} financialSettings={financialSettings} mode={mode} />
          </Box>
         </CardContainer>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <TotalSpendingWatcher mode={mode} financialSettings={financialSettings} />
            </Box>
          </CardContainer>
        </GridItem>

        <GridItem rowSpan={2} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <CategoryBreakdownChart mode={mode} />
            </Box>
          </CardContainer>
        </GridItem>

        <GridItem rowSpan={2} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <BudgetComparerChart mode={mode} />
            </Box>
          </CardContainer>
        </GridItem>

        <GridItem rowSpan={5} colSpan={1} >
         <CardContainer>
          <Box px={4}>
            <ExpenseWatcherList />
          </Box>
         </CardContainer>
        </GridItem>

       <GridItem rowSpan={3} colSpan={1}>
         <CardContainer height='100%'>
           <Box px={4}>
            <ReceiptHub />
           </Box>
         </CardContainer>
       </GridItem>

        <GridItem rowSpan={3} colSpan={1}>
         <CardContainer height='100%'>
          <Box px={4}>
            <RecentReceiptsList />
          </Box>
         </CardContainer>
        </GridItem>

      </Grid>
      </Sidebar>
  );
}

export default DashboardRoute;