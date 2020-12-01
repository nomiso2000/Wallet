import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import notification from '../../services/notification';
import {
  setError,
  loaderON,
  loaderOFF,
  filterALL,
  deleteTransaction,
  editTransaction,
  getAllTransactionsFromBack,
} from '../transactions/action';
import getTransaction from './selector';
import Axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

export const addTransactionOperation = createTransaction => async dispatch => {
  dispatch({ type: types.ADD_TRANSACTION });
  try {
    const { data } = await API.transaction.add(createTransaction);
    console.log(data);
    dispatch({ type: types.ADD_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'add Transaction Success!',
    });

    dispatch(getAllTransactionsFromBack(data));
    notification({
      type: 'success',
      message: 'Get Transactions Success!',
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: types.ADD_FAILURE, payload: e });
    notification({
      type: 'error',
      message: e.message,
    });
  }
};

export const getTransactionOperation = () => async dispatch => {
  dispatch({ type: types.GET_TRANSACTION });

  try {
    const { data } = await API.transaction.get();
    console.log(data);
    dispatch({ type: types.GET_SUCCESS });
    dispatch(getAllTransactionsFromBack(data));
    notification({
      type: 'success',
      message: 'Get Transactions Success!',
    });
  } catch (e) {
    dispatch({ type: types.GET_FAILURE });
    dispatch(setError(e));
    notification({
      type: 'error',
      message: e.message,
    });
  }
};
export const transactionCategories = () => async dispatch => {
  dispatch({ type: types.GET_TRANSACTION });
  try {
    const { data } = await axios.get(
      `https://sheltered-sea-54747.herokuapp.com/api/transaction-categories`,
    );
    console.log(data);
    dispatch({ type: types.GET_SUCCESS });
    dispatch(getAllTransactionsFromBack(data));
    notification({
      type: 'success',
      message: 'Get Categories Success!',
    });
  } catch (e) {
    dispatch({ type: types.GET_FAILURE });
    dispatch(setError(e));
    notification({
      type: 'error',
      message: e.message,
    });
  }

  // dispatch({ type: 'getTransactionCategories' });
  // try {
  //   const data = await API.transaction.get();
  //   console.log(data);
  //   dispatch({ type: 'getTransactionCategoriesSucces', payload: data });
  //   notification({
  //     type: 'success',
  //     message: 'Get Transaction Categories Success!',
  //   });
  // } catch (e) {
  //   console.log(e.response);
  //   dispatch({
  //     type: 'getTransactionCategoriesError',
  //     payload: e.response.data.errors,
  //   });
  // }
};

export const deleteTransactionOperation = id => async dispatch => {
  const deleteUrl = `/api/transactions/${id}`;

  dispatch(loaderON());

  try {
    const response = await axios.delete(deleteUrl);
    dispatch(deleteTransaction(id));
    notification({
      type: 'success',
      message: 'Delete transaction Success!',
    });
  } catch (error) {
    dispatch(setError(error));
    notification({
      type: 'error',
      message: error.message,
    });
  } finally {
    dispatch(loaderOFF());
  }
};

export const editTransactionOperation = editedTransaction => async dispatch => {
  console.log('editedTransaction', editedTransaction)
  const editeUrl = `/api/transactions/${editedTransaction.id}`;

  dispatch(loaderON());
  await axios({
    method: 'patch',
    url: editeUrl,
    data: {
      transactionDate: editedTransaction.transactionDate,
      type: editedTransaction.type,
      categoryId: editedTransaction.categoryId,
      comment: editedTransaction.comment,
      amount: Number(editedTransaction.amount),
    },
  })
    .then(response => {
      console.log('response', response);

      //проверка на успешность ответа по коду,  axios.get() все транзакции, отрисовка
      // axios
      //   .get('https://sheltered-sea-54747.herokuapp.com/api/transactions')
      //   .then(response => { dispatch(setUpdetedTransactionsFromBack(response))
      //       });
       dispatch(editTransaction(editedTransaction));
      notification({
        type: 'success',
        message: 'Edite transaction Success!',
      });
    })
    .catch(error => {
      dispatch(setError(error));
      notification({
        type: 'error',
        message: error.message,
      });
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
     
        dispatch(getAllTransactionsFromBack(response.data));
      
    })
    .catch(error => {
      dispatch(setError(error));
      notification({
        type: 'error',
        message: error.message,
      });
    })
    .finally(() => dispatch(loaderOFF()));
};
