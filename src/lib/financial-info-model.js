/* 
Variables & methods prepended with `_` are meant to be kept private.
They should only be used within the class.
*/

export class FinancialInfo {
  constructor() {
    this._annualIncome = 0.0;
    this._weeklyBudgetAmount = 0.0;
    this._weeklyTotalSpending = 0.0;
    this._annualBudgetAmount = 0.0;
    this._annualTotalSpending = 0.0;
  }

  getAnnualIncome() {
    return this._annualIncome;
  }
  getWeeklyBudgetAmount() {
    return this._weeklyBudgetAmount;
  }
  getWeeklyTotalSpending() {
    return this._weeklyTotalSpending;
  }
  getAnnualBudgetAmount() {
    return this._annualBudgetAmount;
  }
  getAnnualTotalSpending() {
    return this._annualTotalSpending;
  }

  setAnnualIncome(annualIncome) {
    this._annualIncome = annualIncome;
  }
  setWeeklyBudgetAmount(weeklyBudgetAmount) {
    this._weeklyBudgetAmount = weeklyBudgetAmount;
  }
  setWeeklyTotalSpending(weeklyTotalSpending) {
    this._weeklyTotalSpending = weeklyTotalSpending;
  }
  setAnnualBudgetAmount(annualBudgetAmount) {
    this._annualBudgetAmount = annualBudgetAmount;
  }
  setAnnualTotalSpending(annualTotalSpending) {
    this._annualTotalSpending = annualTotalSpending;
  }

  isWeeklySpendingOverWeeklyBudget(weeklyBudgetAmount, weeklyTotalSpending) {
    return this._isOverBudget(weeklyBudgetAmount, weeklyTotalSpending);
  }

  isAnnualSpendingOverAnnualBudget(annualBudgetAmount, annualTotalSpending) {
    return this._isOverBudget(annualBudgetAmount, annualTotalSpending);
  }

  _isOverBudget(budgetAmountForPeriod, totalSpendingForPeriod) {
    return (budgetAmountForPeriod > totalSpendingForPeriod) ? true : false;
  }
};