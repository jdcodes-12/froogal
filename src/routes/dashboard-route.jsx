import { useContext, useState, useEffect } from 'react';
import { getFinancialSettings } from '../utils/database-functions/getFinancialSettings';
import { addReceipt } from '../utils/database-functions/addReceipt';
import { getCategories } from '../utils/database-functions/getCategories';
import { getReceipts } from '../utils/database-functions/getReceipts';
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
  const [receipts, setReceipts] = useState([]);
  const [receiptData, setReceiptData] = useState({
    name: "",
    locationName: "",
    date: new Date(),
    items: [],
    tags: [],
  });
  const [item, setItem] = useState({
    name: "",
    quantity: 0,
    unitPrice: 0,
  });
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setReceiptData((prev) => ({ ...prev, items: items }));
  }, [items]);

  useEffect(() => {
    const fetchData = async () => {
      const finances = await getFinancialSettings(currentUser?.uid);
      const receipts = await getReceipts(currentUser?.uid);
      const categories = await getCategories(currentUser?.uid);
      setCategories(categories);
      setFinancialSettings((prev) => ({ ...prev, ...finances}));
      setReceipts((prev) => ([...prev, ...receipts ]));
    };
    fetchData();
  }, [currentUser?.uid]);

  const onSubmission = async (e) => {
    e.preventDefault();
    await addReceipt(currentUser?.uid, receiptData);
    setReceipts((prev) => ([receiptData, ...prev ]));
    setReceiptData({
      name: "",
      locationName: "",
      date: "",
      items: [],
      categories: [],
      tags: [],
    }); 
  }

  const categoryChangeHandler = (e) => {
    setReceiptData((prev) => ({
      ...prev, 
      tags: e.map((tag) => ({
        name: tag
      }))}));
  };

  const handleItemSubmission = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, item]);
    setItem({
      name: "",
      quantity: 0,
      unitPrice: 0,
    })
  };

  const handleItemNumberInputChange = (name) => (value) => {
    setItem((prev) => ({
      ...prev, [name]: value
    }));
  };

  const handleItemChange = (e) => {
    setItem((prev) => ({
      ...prev, [e.target.name]: e.target.value
    })); 
  };

  const handleReceiptChange = (e) => {
    setReceiptData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const onFinancialChangeHandler = (value) => {
    setFinancialSettings((prev) => ({
      ...prev, ...value
    }));
  };

  const changeMode = (mode) => {
    setMode(mode);
  };
  
  return (
    <Sidebar 
      mode={mode} 
      changeMode={changeMode} 
      onChange={onFinancialChangeHandler} 
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
            <BudgetWatcher onChange={onFinancialChangeHandler} financialSettings={financialSettings} mode={mode} />
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
            <ReceiptHub 
              receiptData={receiptData}
              onSubmit={onSubmission}
              onCategoryChange={categoryChangeHandler}
              categories={categories} 
              item={item} 
              items={items}
              tags={receiptData?.tags} 
              onItemChange={handleItemChange}
              onChange={handleReceiptChange}
              onItemNumberInputChange={handleItemNumberInputChange}
              onItemSubmission={handleItemSubmission}
              receipts={receipts} />
           </Box>
         </CardContainer>
       </GridItem>

        <GridItem rowSpan={3} colSpan={1}>
         <CardContainer height='100%'>
          <Box px={4}>
            <RecentReceiptsList receipts={receipts} />
          </Box>
         </CardContainer>
        </GridItem>

      </Grid>
      </Sidebar>
  );
}

export default DashboardRoute;