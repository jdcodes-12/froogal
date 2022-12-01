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

const DashboardRoute = () => {
  const { currentUser } = useContext(AuthContext);
  const [over, setOver] = useState(false);
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
  const [dataBudgetComparerWeeklyVisualization, setdataBudgetComparerWeeklyVisualization] = useState([]);
  const [dataBudgetCategoryWeeklyVisualization, setDataBudgetCategoryWeeklyVisualization] = useState([]);

  const loading = dataBudgetCategoryWeeklyVisualization.length === 0 || dataBudgetComparerWeeklyVisualization.length === 0;

  const today = new Date();
  const week = 604800000;
  const weekAgo = new Date(today - week);
  const weekday = generateWeekdays(today);

  useEffect(() => {
    setdataBudgetComparerWeeklyVisualization(
      ExpenseComparerVisualization(receipts)
    );
    setDataBudgetCategoryWeeklyVisualization(
      categoryBreakdownVisualizatiion(receipts)
    );
  }, [receipts, financialSettings?.weeklyBudget]);

  useEffect(() => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + item.unitPrice * item.quantity
    }, 0.00).toFixed(2);
    setReceiptData((prev) => ({
      ...prev,
      items: items,
      numItems: items.length,
      totalPrice: totalPrice
    }));
  }, [items]);

  // useEffect(() => {
  //   console.log(receiptData);
  // }, [receiptData]);

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
      ? !receipt?.date?.seconds
        ? new Date(receipt?.date)
        : new Date(receipt?.date.toDate())
      : new Date();
  }

  const getReceiptDateForVisual = (receipt) => {
    return receipt?.date
      ? !receipt?.date?.seconds
        ? weekday[new Date(receipt?.date).getDay()]
        : weekday[new Date(receipt?.date.toDate()).getDay()]
      : '';
  }

  const combineLikeCategories = (arr) => {
    return Object.values(
      arr.reduce((acc, { category, abundance, fullMark }) => {
        acc[category] = acc[category] || { category: category, abundance: abundance, fullMark: fullMark };
        acc[category].abundance += parseInt(abundance);
        return acc;
      }, {})
    );
  }

  const fillEmptyDefaultCategory = (arr) => {
    const categoriesInArr = arr.reduce((acc, tag) => {
      acc.push(tag.category)
      return acc;
    }, []);

    const filteredDefaultCategories = categories.filter((category) => !categoriesInArr.includes(category.name) && category?.default);
    const defaultMapping = filteredDefaultCategories.map((tag) => {
      return ({ category: tag.name, abundance: 1, fullMark: 120 });
    });
    return [...arr, ...defaultMapping];
  }

  const ExpenseComparerVisualization = (receipts) => {
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

  const categoryBreakdownVisualizatiion = (receipts) => {
    return fillEmptyDefaultCategory(
      combineLikeCategories(
        receipts.filter((receipt) => {
          return getReceiptDate(receipt) > weekAgo
        }).reduce((acc, receipt) => {
          if (receipt?.tags && receipt.tags.length > 0) {
            (receipt.tags.map((tag) => {
              acc.push({ category: tag.name, abundance: 3, fullMark: 120 });
            }))
          }
          return acc;
        }, [])
      )
    );
  }

  const onSubmission = async (e) => {
    e.preventDefault();
    await addReceipt(currentUser?.uid, receiptData);
    setReceipts((prev) => ([...prev, receiptData]));
    setReceiptData({
      name: "",
      locationName: "",
      date: new Date(),
      items: [],
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