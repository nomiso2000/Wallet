import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import notification from '../../services/notification';
import {
  addTransaction,
  setError,
  loaderON,
  loaderOFF,
  filterALL,
  deleteTransaction,
  editTransaction,
  getAllTransactionsFromBack,
} from '../transactions/action';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

export const addTransactionOperation = createTransaction => async dispatch => {
  console.log('createTransaction', createTransaction);
  try {
    const { data } = await API.transaction.add(createTransaction);

    dispatch({ type: types.ADD_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'add Transaction Success!',
    });
    console.log('data', data);
    dispatch(addTransaction(data));
    // try {
    //   const { data } = await API.transaction.get();

    //   dispatch({ type: types.GET_SUCCESS });
    //   dispatch(getAllTransactionsFromBack(data));
    //   notification({
    //     type: 'success',
    //     message: 'Get Transactions Success!',
    //   });
    // } catch (e) {
    //   dispatch({ type: types.GET_FAILURE });
    //   dispatch(setError(e));
    //   notification({
    //     type: 'error',
    //     message: e.message,
    //   });
    // }

    notification({
      type: 'success',
      message: 'Get Transactions Success!',
    });
  } catch (e) {
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
  const editeUrl = `/api/transactions/${editedTransaction.id}`;

  dispatch(loaderON());
  try {
    const { data } = await axios({
      method: 'patch',
      url: editeUrl,
      data: {
        transactionDate: editedTransaction.transactionDate,
        type: editedTransaction.type,
        categoryId: editedTransaction.categoryId,
        comment: editedTransaction.comment,
        amount: Number(editedTransaction.amount),
      },
    });

    dispatch(editTransaction(data));
    notification({
      type: 'success',
      message: 'Edite transaction Success!',
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

export const filterALLTransactionOperation = () => async dispatch => {
  const getAllTransactionsUrl = `/api/transactions`;
  dispatch(loaderON());
  dispatch(filterALL('allTransactions'));
  try {
    const { data } = await axios.get(getAllTransactionsUrl);
    dispatch(getAllTransactionsFromBack(data));
    notification({
      type: 'success',
      message: 'All transaction get Success!',
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

export default { getTransactionOperation };
