import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import { setError, loaderON, loaderOFF } from '../transactions/action';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

export const deleteTransactionOperation = id => async dispatch => {
  const deleteUrl = `/api/transactions/${id}`;

  dispatch(loaderON());
  await axios
    .delete(deleteUrl)
    .then(response => {
      console.log('response'), response;
      //проверка на успешность ответа по коду,  axios.get() все транзакции, отрисовка
    })
    .catch(error => {
      dispatch(setError(error)), console.log('error', error);
    })
    .finally(() => dispatch(loaderOFF()));
};

export const editTransactionOperation = id => async dispatch => {
  const editeUrl = `/api/transactions/${id}`;

  dispatch(loaderON());
  await axios
    .patch(editeUrl)
    .then(response => {
      console.log('response'), response;
      // проверка на успешность ответа по коду, axios.get() все транзакции, отрисовка
    })
    .catch(error => dispatch(setError(error)))
    .finally(() => dispatch(loaderOFF()));
};
