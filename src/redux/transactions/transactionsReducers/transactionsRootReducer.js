import { combineReducers } from 'redux';

import transactionReducer from './transactionsReducer';
import transactionErrorReducer from './transactionsErrorReducer';
import transactionsLoaderReducer from './transactionsLoaderReducer';
import transactionFilterReducer from './transactionsFilterReducer';

const transactionsRootReducer = combineReducers({
  items: transactionReducer,
  loader: transactionsLoaderReducer,
  error: transactionErrorReducer,
  filter: transactionFilterReducer,
});

export default transactionsRootReducer;
