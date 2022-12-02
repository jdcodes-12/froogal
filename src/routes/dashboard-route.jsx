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

// Allows the line chart to start end on the weekday that is today.
const generateWeekdays = (today) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const newDays = [];
  const todayIndex = today.getDay() + 1;
  for (var i = 0; i < days.length; i++) {
    newDays[i] = days[(todayIndex + i) % days.length];
  }
  // console.log(newDays);
  return newDays;
}

// React Hook which will generate our data visualizations
const GenerateWeeklyVisualizations = (receipts, weeklyBudget, categories) => {
  const [over, setOver] = useState(false);
  const [spendingTotal, setSpendingTotal] = useState(0.00);
  const [dataBudgetComparerWeeklyVisualization, setdataBudgetComparerWeeklyVisualization] = useState([]);
  const [dataBudgetCategoryWeeklyVisualization, setDataBudgetCategoryWeeklyVisualization] = useState([]);

  const loading = dataBudgetCategoryWeeklyVisualization.length === 0 || dataBudgetComparerWeeklyVisualization.length === 0;

  const today = new Date();
  const week = 604800000;
  const weekAgo = new Date(today - week);
  const weekday = generateWeekdays(today);
  const offset = weekday.length - today.getDay() - 1;

  // Adds in missing values for weekdays that don't have receipts
  const addNonExistentWeeks = (arr) => {
    var newArr = arr;
    const weekdays = arr.reduce((acc, index) => {
      return [...acc, index?.week];
    }, []);

    const weekdaysNotInArr = weekday.filter((day) => weekdays.every((day2) => day2 !== day));
    weekdaysNotInArr.forEach((day) => {
      newArr.push({ week: day, budget: weeklyBudget, amountSpent: 0.00 });
    })
    return newArr;
  };

  // Adds up all the receipt values for visualization and sets Over/Under and Total Spending
  const addUpValues = (arr) => {
    var total = 0;
    const totalSpent = arr.reduce((acc, index) => {
      return acc + parseFloat(index?.amountSpent);
    }, 0.00);
    setSpendingTotal(totalSpent);
    setOver(totalSpent > weeklyBudget);
    return arr.map((value) => {
      total += parseFloat(value?.amountSpent);
      return ({ ...value, amountSpent: total.toFixed(2) })
    })
  };

  // Gets receipt date varies based on Date object vs Firebase Date object
  const getReceiptDate = (receipt) => {
    return receipt?.date
      ? !receipt?.date?.seconds
        ? new Date(receipt?.date)
        : receipt?.date.toDate()
      : new Date();
  }

  // Gets the receipt Day varies based on Date objects vs Firebase Date objects
  const getReceiptDayForVisual = (receipt) => {
    return receipt?.date
      ? !receipt?.date?.seconds
        ? weekday[((receipt?.date).getDay() + offset) % weekday.length]
        : weekday[(receipt?.date.toDate().getDay() + offset) % weekday.length]
      : '';
  }

  // Combines categories of the same name and returns an array of visualization data 
  const combineLikeCategories = (arr) => {
    return Object.values(
      arr.reduce((acc, { category, abundance, fullMark }) => {
        acc[category] = acc[category] || { category: category, abundance: abundance, fullMark: fullMark };
        acc[category].abundance += parseInt(abundance);
        return acc;
      }, {})
    );
  }

  // Fills in the empty Default categories for the data visualization if receipts don't have the defaults.
  const fillEmptyDefaultCategory = (arr) => {
    const categoriesInArr = arr.reduce((acc, tag) => {
      acc.push(tag.category)
      return acc;
    }, []);

    const filteredDefaultCategories = categories.filter((category) => {
      return !categoriesInArr.includes(category.name) && category?.default;
    });
    const defaultMapping = filteredDefaultCategories.map((tag) => {
      return ({ category: tag.name, abundance: 0, fullMark: 120 });
    });
    return [...arr, ...defaultMapping];
  }

  // Data visualization function for comparer graph
  const receiptComparerVisualization = (receipts) => {
    return addUpValues(
      addNonExistentWeeks(
        Object.values(
          receipts.filter((receipt) => //Filter receipts that aren't weekly
            getReceiptDate(receipt) > weekAgo && getReceiptDate(receipt) <= today
          ).map((receipt) => ({ // Map all receipts to data format
            week: getReceiptDayForVisual(receipt),
            budget: parseFloat(weeklyBudget),
            amountSpent: parseFloat(receipt?.totalPrice)
          })
          ).reduce((acc, { week, budget, amountSpent }) => { // Reduce all the duplicates to their respective weeks
            acc[week] = acc[week] || { week: week, budget: budget, amountSpent: 0.00 };
            acc[week].amountSpent += parseFloat(amountSpent);
            return acc;
          }, {})
        )).sort((x, y) => // Sort data based on the day of the week
          weekday.indexOf(x.week) - weekday.indexOf(y.week)
        ));
  }

  // Data visualization function for category breakdown graph
  const categoryBreakdownVisualization = (receipts) => {
    return fillEmptyDefaultCategory(
      combineLikeCategories(
        receipts.filter((receipt) => { // Filter receipts that don't meet weekly criteria
          return getReceiptDate(receipt) > weekAgo && getReceiptDate(receipt) <= today
        }).reduce((acc, receipt) => { // Reduce the receipts to an array of tag objects for data visualization
          if (receipt?.tags && receipt.tags.length > 0) { // Make sure a receipt has tags before mapping
            (receipt.tags.map((tag) => {  // Mapping the tags to an object for data visualization
              acc.push({ category: tag.name, abundance: 3, fullMark: 120 });
            }))
          }
          return acc;
        }, [])
      )
    );
  }

  useEffect(() => {
    setdataBudgetComparerWeeklyVisualization(
      receiptComparerVisualization(receipts)
    );
    setDataBudgetCategoryWeeklyVisualization(
      categoryBreakdownVisualization(receipts)
    );
  }, [receipts, weeklyBudget]);

  return { dataBudgetComparerWeeklyVisualization, dataBudgetCategoryWeeklyVisualization, over, spendingTotal, loading };
}

const DashboardRoute = () => {
  const { currentUser } = useContext(AuthContext);
  const [financialSettings, setFinancialSettings] = useState({
    id: "",
    userID: currentUser?.uid ?? "",
    monthlyBudget: 0.00,
    monthlyIncome: 0.00,
    weeklyBudget: 0.00,
    weeklyIncome: 0.00,
    annualBudget: 0.00,
    annualIncome: 0.00,
  });
  const [mode, setMode] = useState('weekly');
  const [responseSubmission, setResponseSubmission] = useState({});
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

  const {
    dataBudgetCategoryWeeklyVisualization,
    dataBudgetComparerWeeklyVisualization,
    over,
    spendingTotal,
    loading
  } = GenerateWeeklyVisualizations(receipts, financialSettings?.weeklyBudget, categories);

  useEffect(() => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + item.unitPrice * item.quantity
    }, 0.00).toFixed(2);
    if (items?.length > 0) {
      setReceiptData((prev) => ({
        ...prev,
        items: items,
        numItems: items.length,
        totalPrice: totalPrice
      }));
    }
  }, [items]);

  useEffect(() => {
    if (responseSubmission?.id) {
      setReceiptData((prev) => ({ ...prev, id: responseSubmission?.id }));
    }
  }, [responseSubmission?.id]);

  useEffect(() => {
    if (receiptData?.id) {
      setReceipts((prev) => ([receiptData, ...prev]));
    }
  }, [receiptData?.id])

  // useEffect(() => {
  //   console.log({ receipts });
  // }, [receipts]);

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
    const res = await addReceipt(currentUser?.uid, receiptData);
    setReceiptData((prev) => ({ ...prev, items: items }));
    setResponseSubmission(res);
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

  const onReceiptDeletion = async (e, id) => {
    e.preventDefault();
    setReceipts(receipts.filter((receipt) => receipt?.id != id));
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
    (e.target.name !== 'date') ?
      setReceiptData((prev) => ({
        ...prev, [e.target.name]: e.target.value
      }))
      : setReceiptData((prev) => ({
        ...prev, [e.target.name]: new Date(e.target.value ? e.target.value.replace(/-/g, '/') : null)
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
      financialSettings={financialSettings}
      receipts={receipts}>
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
              <CategoryBreakdownChart loading={loading} weekData={dataBudgetCategoryWeeklyVisualization} mode={mode} />
            </Box>
          </CardContainer>
        </GridItem>

        <GridItem rowSpan={2} colSpan={1} >
          <CardContainer height='100%'>
            <Box px={4}>
              <BudgetComparerChart loading={loading} weekData={dataBudgetComparerWeeklyVisualization} mode={mode} />
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