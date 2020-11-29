import { createReducer } from '@reduxjs/toolkit';
import { setError, resetError } from '../action';

const initialState = '';
const transactionErrorReducer = createReducer(initialState, {
  [setError]: (state, {payload}) => {
    console.log('payload', payload)
    return  payload.message
  },


  [resetError]: (state, action) => {
    return '';
  },
});

export default transactionErrorReducer;
