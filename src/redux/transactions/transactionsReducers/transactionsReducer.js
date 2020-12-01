import { createReducer } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  editTransaction,
  getAllTransactionsFromBack,
  filterTransactionsByIncomes,
  filterTransactionsByExpences,
} from '../action';

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
  // {
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg',
  //   name: 'Mango',
  //   isOnline: 'true',
  //   id: 1812,
  //   amount:2134,
  //   balance:2134
  // },
  // {
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg',
  //   name: 'Kiwi',
  //   isOnline: 'false',
  //   id: 1137,
  //   amount:2134,
  //   balance:2134
  // },
  // {
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  //   name: 'Ajax',
  //   isOnline: 'true',
  //   id: 1213,
  //   amount:2134,
  //   balance:2134
  // },
  // {
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg',
  //   name: 'Jay',
  //   isOnline: 'true',
  //   id: 1714,
  //   amount:2134,
  //   balance:2134
  // },
  // {
  //   avatar:
  //     'https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg',
  //   name: 'Poly',
  //   isOnline: 'false',
  //   id: 1284,
  //   amount:2134,
  //   balance:2134
  // },
];
const transactionReducer = createReducer(initialState, {
  [getAllTransactionsFromBack]: (state, action) => {
    return [...action.payload];
  },
  [deleteTransaction]: (state, action) => {
    return [...state.filter(transaction => transaction.id !== action.payload)];
  },

  [editTransaction]: (state, action) => {
    const newArrTransactions = [
      ...state.map(transaction => {
        if (transaction.id === action.payload.id) {
          return action.payload;
        }
        return transaction;
      }),
    ];

    return newArrTransactions;
    // return [
    //   ...state.filter(transaction => {
    //     if (transaction.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return transaction.id !== action.payload.id;
    //   }),
    // ];
  },

  // [filterTransactionsByIncomes]: (state, action) => {
  //   return [
  //     ...action.payload.filter(transaction => transaction.type === 'INCOME'),
  //   ];
  // },

  // [filterTransactionsByExpences]: (state, action) => {
  //   return [
  //     ...action.payload.filter(transaction => transaction.type === 'EXPENSE'),
  //   ];
  // },
});

export default transactionReducer;
