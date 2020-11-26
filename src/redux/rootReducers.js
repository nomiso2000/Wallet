import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/reducer';

import errorsReducer from './error/reducer';
// import transactionReducer from './transactions/transactionsReducers/transactionsReducer';
// import transactionsErrorReducer from './transactions/transactionsReducers/transactionsErrorReducer';
import transactionsRootReducer from './transactions/transactionsReducers/transactionsRootReducer';
import { encryptor } from './encryptor';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  transforms: [encryptor],
};

const rootReducers = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  errors: errorsReducer,
  transactions:transactionsRootReducer
});

export default rootReducers;
