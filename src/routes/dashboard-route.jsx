import { useContext, useState, useEffect } from 'react';
import { getFinancialSettings } from '../utils/database-functions/getFinancialSettings';
import { addReceipt } from '../utils/database-functions/addReceipt';
import { getCategories } from '../utils/database-functions/getCategories';
import { getReceipts } from '../utils/database-functions/getReceipts';
import { deleteReceipt } from '../utils/database-functions/deleteReceipt';
import CardContainer from '../components/containers-ui/CardBodyContainer'
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
import {
  Box,
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
  const [spendingTotal, setSpendingTotal] = useState(0.00);
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
  const [dataWeeklyVisualization, setDataWeeklyVisualization] = useState([
    { week: 'Mon', budget: 500, amountSpent: 42 },
    { week: 'Tues', budget: 500, amountSpent: 69 },
    { week: 'Wed', budget: 500, amountSpent: 202 },
    { week: 'Thur', budget: 500, amountSpent: 202 },
    { week: 'Fri', budget: 500, amountSpent: 278 },
    { week: 'Sat', budget: 500, amountSpent: 307 },
    { week: 'Sun', budget: 500, amountSpent: 502 },
  ]);

  const today = new Date();
  const week = 604800000;
  const weekAgo = new Date(today - week);

  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  useEffect(() => {
    setDataWeeklyVisualization(dataVisualization(receipts));
  }, [receipts, financialSettings?.weeklyBudget]);

  useEffect(() => {
    setReceiptData((prev) => ({ ...prev, items: items }));
  }, [items]);

  useEffect(() => {
    const fetchData = async () => {
      const finances = await getFinancialSettings(currentUser?.uid);
      const receipts = await getReceipts(currentUser?.uid);
      const categories = await getCategories(currentUser?.uid);
      setCategories(categories);
      setFinancialSettings((prev) => ({ ...prev, ...finances }));
      setReceipts((prev) => ([...prev, ...receipts]));
    };
    fetchData();
  }, [currentUser?.uid]);

  const onSubmission = async (e) => {
    e.preventDefault();
    await addReceipt(currentUser?.uid, receiptData);
    setReceipts((prev) => ([receiptData, ...prev]));
    setReceiptData({
      name: "",
      locationName: "",
      date: "",
      items: [],
      categories: [],
      tags: [],
    });
    setItems([]);
  }

  const categoryChangeHandler = (e) => {
    setReceiptData((prev) => ({
      ...prev,
      tags: e.map((tag) => ({
        name: tag
      }))
    }));
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

  const addNonExistentWeeks = (arr) => {
    var newArr = arr;
    const weekdays = arr.reduce((acc, index) => {
      return [...acc, index?.week];
    }, []);

    const weekdaysNotInArr = weekday.filter((day) => weekdays.every((day2) => day2 !== day));
    weekdaysNotInArr.forEach((day) => {
      newArr.push({ week: day, budget: financialSettings?.weeklyBudget, amountSpent: 0.00 });
    })
    return newArr;
  };

  const addUpValues = (arr) => {
    var total = 0;
    const totalSpent = arr.reduce((acc, index) => {
      return acc + parseFloat(index?.amountSpent);
    }, 0.00);
    setSpendingTotal(totalSpent);
    setOver(totalSpent > financialSettings?.weeklyBudget);
    return arr.map((value) => {
      total += parseFloat(value?.amountSpent);
      return ({ ...value, amountSpent: total.toFixed(2) })
    })
  };

  const getReceiptDate = (receipt) => {
    return receipt?.date
      ? typeof receipt.date === 'string'
        ? new Date(receipt?.date)
        : new Date(receipt?.date.toDate())
      : new Date();
  }

  const getReceiptDateForVisual = (receipt) => {
    return receipt?.date
      ? typeof receipt.date === 'string'
        ? weekday[new Date(receipt?.date).getDay()]
        : weekday[new Date(receipt?.date.toDate()).getDay()]
      : '';
  }

  const dataVisualization = (receipts) => {
    return addUpValues(
      addNonExistentWeeks(
        Object.values(
          receipts.filter((receipt) =>
            getReceiptDate(receipt) > weekAgo
          ).map((receipt) => ({
            week: getReceiptDateForVisual(receipt),
            budget: parseFloat(financialSettings?.weeklyBudget),
            amountSpent: parseFloat(receipt?.totalPrice)
          })
          ).reduce((acc, { week, budget, amountSpent }) => {
            acc[week] = acc[week] || { week: week, budget: budget, amountSpent: 0.00 };
            acc[week].amountSpent += parseFloat(amountSpent);
            return acc;
          }, {})
        )).sort(
          (x, y) => weekday.indexOf(x.week) - weekday.indexOf(y.week)
        ));
  }

  const onReceiptDeletion = async (e, id) => {
    e.preventDefault();
    setReceipts(receipts.filter((receipt) => receipt.id !== id));
    await deleteReceipt(id);
  }

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
              <TotalSpendingWatcher receiptSpendingTotal={spendingTotal} mode={mode} financialSettings={financialSettings} />
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
              <BudgetComparerChart weekData={dataWeeklyVisualization} mode={mode} />
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
                onItemChange={handleItemChange}
                onChange={handleReceiptChange}
                onItemNumberInputChange={handleItemNumberInputChange}
                onItemSubmission={handleItemSubmission}
                onDeletion={onReceiptDeletion}
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