import { createSelector } from '@reduxjs/toolkit';
import moment from 'moment-with-locales-es6';
import finalYMArrayMethod from './statServices';

moment.locale('ru');

const getAllTransactions = state => state.statictics.allTransactions;

const getCategoriesSummary = state =>
  state.statictics.transactionsSummary.categoriesSummary;

const getIncomeSummary = state =>
  state.statictics.transactionsSummary.incomeSummary;
const getExpenseSummary = state =>
  state.statictics.transactionsSummary.expenseSummary;
const getPeriodTotal = state =>
  state.statictics.transactionsSummary.periodTotal;

const getArrayOfYrsMths = createSelector([getAllTransactions], array => {
  return array
    .filter(({ type }) => type === 'EXPENSE')
    .map(({ transactionDate }) => {
      const year = moment(transactionDate, 'YYYY MM D').format('YYYY');
      const month = moment(transactionDate, 'YYYY MM D').format('MM');
      return { year, month: [month] };
    })
    .sort((a, b) => a.year - b.year);
});
const getAssembledArrayOfYrsMths = createSelector([getArrayOfYrsMths], array =>
  finalYMArrayMethod(array),
);

export default {
  getAllTransactions,
  getCategoriesSummary,
  getIncomeSummary,
  getExpenseSummary,
  getPeriodTotal,
  getAssembledArrayOfYrsMths,
};
