import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { deleteTransaction, editTransaction } from '../action';

// response ty-e
// {
//   "id": "string",
//   "transactionDate": "string",
//   "type": "INCOME",
//   "categoryId": "string",
//   "userId": "string",
//   "comment": "string",
//   "amount": 0,
//   "balanceAfter": 0
// }
//
const initialState = [
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg',
    name: 'Mango',
    isOnline: 'true',
    id: 1812,
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg',
    name: 'Kiwi',
    isOnline: 'false',
    id: 1137,
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    name: 'Ajax',
    isOnline: 'true',
    id: 1213,
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg',
    name: 'Jay',
    isOnline: 'true',
    id: 1714,
  },
  {
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg',
    name: 'Poly',
    isOnline: 'false',
    id: 1284,
  },
];

const transactionReducer = createReducer(initialState, {
  [deleteTransaction]: (state, action) => {
    return [...state.filter(transaction => transaction.id !== action.payload)];
  },
  [editTransaction]: (state, action) => {
    console.log('editTransaction action.payload', action.payload);
    console.log(
      '...state.filter(transaction => transaction.id !== action.payload)',
      state.filter(transaction => transaction.id !== action.payload),
    );

    return [
      ...state.filter(transaction => transaction.id !== action.payload),
      ...action.payload,
    ];
  },
});

const getAllTransaction = createReducer('', {
  // [addTransaction]: (state, action) => {
  //   return { ...action };
  // },
  // [editTransaction]: (state, action) => {
  //   console.log('editTransaction action.payload', action.payload);
  //   console.log(
  //     '...state.filter(transaction => transaction.id !== action.payload)',
  //     state.filter(transaction => transaction.id !== action.payload),
  //   );
  //   return [
  //     ...state.filter(transaction => transaction.id !== action.payload),
  //     ...action.payload,
  //   ];
  // },
});

export default combineReducers({ getAllTransaction, transactionReducer });
