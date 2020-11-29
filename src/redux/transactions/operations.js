import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import {
  setError,
  loaderON,
  loaderOFF,
  filterALL,
  deleteTransaction,
  editTransaction,
  getAllTransactionsFromBack,
  filterIncomes,
  filterExpences,
} from '../transactions/action';
import getTransaction from './selector';
import setUpdetedTransactionsFromBack from './transactionsReducers/transactionsReducer';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

export const deleteTransactionOperation = id => async dispatch => {
  const deleteUrl = `/api/transactions/${id}`;

  dispatch(loaderON());
  await axios
    .delete(deleteUrl)
    .then(response => {
      console.log('response', response);

      if (status.code >= 200 && status.code <= 300) {
        //проверка на успешность ответа по коду,  axios.get() все транзакции, отрисовка
        // axios
        //   .get('https://sheltered-sea-54747.herokuapp.com/api/transactions')
        //   .then(response => { dispatch(setUpdetedTransactionsFromBack(response))
        //       });
        dispatch(deleteTransaction(id));
      }
    })
    .catch(error => {
      dispatch(setError(error));
      console.log('error', error);
    })
    .finally(() => dispatch(loaderOFF()));
};

export const editTransactionOperation = editedTransaction => async dispatch => {
  const editeUrl = `/api/transactions/${editedTransaction.id}`;

  dispatch(loaderON());
  await axios({
    method: 'patch',
    url: editeUrl,
    data: {
      firstName: {
        transactionDate: editedTransaction.transactionDate,
        type: editedTransaction.type,
        categoryId: editedTransaction.categoryId,
        comment: editedTransaction.comment,
        amount: editedTransaction.amount,
      },
    },
  })
    .then(response => {
      console.log('response', response);
      if (status.code >= 200 && status.code <= 300) {
        //проверка на успешность ответа по коду,  axios.get() все транзакции, отрисовка
        // axios
        //   .get('https://sheltered-sea-54747.herokuapp.com/api/transactions')
        //   .then(response => { dispatch(setUpdetedTransactionsFromBack(response))
        //       });
        dispatch(editTransaction(editedTransaction));
      }
    })
    .catch(error => {
      dispatch(setError(error));
    })
    .finally(() => dispatch(loaderOFF()));
};

export const filterALLTransactionOperation = () => async dispatch => {
  const getAllTransactionsUrl = `/api/transactions`;
  dispatch(filterALL('allTransactions'));
  dispatch(loaderON());
  await axios
    .get(getAllTransactionsUrl)
    .then(response => {
      console.log('response', response);
      // проверка на успешность ответа по коду,отрисовка
      if (status.code >= 200 && status.code <= 300) {
        dispatch(getAllTransactionsFromBack(response));
      }
    })
    .catch(error => dispatch(setError(error)))
    .finally(() => dispatch(loaderOFF()));
};

// export const filterIncomesTransactionOperation = () => async dispatch => {
//   const getIncomesTransactionsUrl = `/api/transaction-categories`;
//   dispatch(filterIncomes('Incomes'))
//   dispatch(loaderON());
//   await axios
//     .get(getIncomesTransactionsUrl)
//     .then(response => {
//       console.log('response', response);
//       // проверка на успешность ответа по коду,отрисовка
//     })
//     .catch(error => {console.log(error); dispatch(setError(error))})
//     .finally(() => dispatch(loaderOFF()));
// };

// export const filterExpencesTransactionOperation = () => async dispatch => {
//   const getExpencesTransactionsUrl = `/api/transaction-categories`;
//   dispatch(filterExpences('Expences'))
//   dispatch(loaderON());
//   await axios
//     .get(getExpencesTransactionsUrl)
//     .then(response => {
//       console.log('response'), response;
//       // проверка на успешность ответа по коду,отрисовка
//     })
//     .catch(error => dispatch(setError(error)))
//     .finally(() => dispatch(loaderOFF()));
// };
