import { createReducer } from '@reduxjs/toolkit';
import { filterALL, filterExpences, filterIncomes } from '../action';

const initialState = 'allTransactions';
// action filterALL надо запускать при рендере таблицы транзакций

const transactionFilterReducer = createReducer(initialState, {
  [filterALL]: (state, action) => {
    // console.log('action', action);
    return action.payload;
  },

  [filterExpences]: (state, action) => {
    console.log('action', action);
    return action.payload;
  },
  [filterIncomes]: (state, action) => {
    console.log('action', action);
    return action.payload;
  },
});

export default transactionFilterReducer;
