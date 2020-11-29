import { createReducer } from '@reduxjs/toolkit';
import { setError, resetError } from '../action';

const initialState = '';
const transactionErrorReducer = createReducer(initialState, {
  [setError]: action => {
    console.log('action', action);
    return action.payload;
  },

  [resetError]: () => {
    return '';
  },
});

export default transactionErrorReducer;
