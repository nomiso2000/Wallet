import { createSelector } from "@reduxjs/toolkit";

export const getTransaction = (state) => {
    return state.transactions.items;
  };

  export const getFilterValue = (state) => {
    return state.transactions.filter;
  };

  export const filtredTransactions = createSelector(
    [getTransaction, getFilterValue],
    (transactions, filter) => {
      if(filter==='INCOME'){return transactions.filter(transaction => transaction.type === 'INCOME')}
      else if(filter==='EXPENSE'){return transactions.filter(transaction => transaction.type === 'EXPENSE')}
      return transactions
     
    }
  );