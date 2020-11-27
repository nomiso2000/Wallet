import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import { setError, loaderON, loaderOFF } from '../transactions/action';
import notification from '../../services/notification';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

export const addTransactionOperation = createTransaction => async dispatch => {
  dispatch({ type: types.ADD_TRANSACTION });
  console.log('createTrans', createTransaction);
  try {
    const { data } = await API.transaction.add(createTransaction);
    console.log(data);
    dispatch({ type: types.ADD_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'add Transaction Success!',
    });
  } catch (e) {
    console.log(e.response);
    dispatch({ type: types.ADD_FAILURE, payload: e.response.data.errors });
  }
};

export const getTransactionOperation = () => async dispatch => {
  dispatch({ type: types.GET_TRANSACTION });
  try {
    const { data } = await API.transaction.get();
    console.log(data);
    dispatch({ type: types.GET_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'Get Transaction Success!',
    });
  } catch (e) {
    console.log(e.response);
    dispatch({ type: types.GET_FAILURE, payload: e.response.data.errors });
  }
};

export const deleteTransactionOperation = id => async dispatch => {
  const deleteUrl = `/api/transactions/${id}`;

  dispatch(loaderON());
  await axios
    .delete(deleteUrl)
    .then(response => {
      console.log('response');
      return response;

      //   проверка на успешность ответа по коду,  axios.get() все транзакции, отрисовка
    })
    .catch(error => dispatch(setError(error)))
    .finally(() => dispatch(loaderOFF()));
};

export const editTransactionOperation = id => async dispatch => {
  const editeUrl = `/api/transactions/${id}`;

  dispatch(loaderON());
  await axios
    .patch(editeUrl)
    .then(response => {
      console.log('response');
      return response;
      // проверка на успешность ответа по коду, axios.get() все транзакции, отрисовка
    })
    .catch(error => dispatch(setError(error)))
    .finally(() => dispatch(loaderOFF()));
};
