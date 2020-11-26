import { combineReducers } from 'redux';

import transactionReducer from './transactionsReducer';
import transactionErrorReducer from './transactionsErrorReducer';
import transactionsLoaderReducer from './transactionsLoaderReducer';

const transactionsRootReducer = combineReducers({
  items: transactionReducer,
  loader: transactionsLoaderReducer,
  error: transactionErrorReducer,
});

export default transactionsRootReducer;
