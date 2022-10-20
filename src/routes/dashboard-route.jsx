import React from 'react';

import CardContainer from '../components/containers-ui/card-body-container'
import Navbar from '../components/dashboard-ui/bars/Navbar';
import ReceiptHub from '../components/dashboard-ui/hubs/ReceiptHub';
import RecentReceiptsList from '../components/dashboard-ui/lists/RecentReceiptsList';
import ExpenseWatcherList from '../components/dashboard-ui/lists/ExpenseWatcherList';
import OverUnderWatcher from '../components/dashboard-ui/watchers/OverUnderWatcher';
import BudgetWatcher from '../components/dashboard-ui/watchers/BudgetWatcher';
import TotalSpendingWatcher from '../components/dashboard-ui/watchers/TotalSpendingWatcher';
import CategoryBreakdownChart from '../components/dashboard-ui/charts/CategoryBreakdownChart';
import BudgetComparerChart from '../components/dashboard-ui/charts/BudgetComparerChart';
import Sidebar from '../components/dashboard-ui/bars/Sidebar';


import { Box, 
         Grid,
         GridItem,
       } from '@chakra-ui/react';

const DashboardRoute = (user) => {
  console.log({ user });
  return (
    <Sidebar>
      <Grid 
            display='grid'
            gap='16px'
            margin='2rem'
            gridTemplateColumns='repeat(auto-fit, minmax(400px, 1fr))'
      >
        <GridItem rowSpan={1} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <OverUnderWatcher />
            </Box>
          </CardContainer>
        </GridItem>
        
        <GridItem rowSpan={1} colSpan={1}  >
         <CardContainer height='100%'>
          <Box px={4}>
            <BudgetWatcher />
          </Box>
         </CardContainer>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <TotalSpendingWatcher />
            </Box>
          </CardContainer>
        </GridItem>

        <GridItem rowSpan={2} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <CategoryBreakdownChart />
            </Box>
          </CardContainer>
        </GridItem>

        <GridItem rowSpan={2} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <BudgetComparerChart />
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