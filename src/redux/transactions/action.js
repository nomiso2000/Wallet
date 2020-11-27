import types from '../types';
import { createAction } from '@reduxjs/toolkit';

const deleteTransaction = createAction(types.DELETE_TRANSACTION);

const editTransaction = createAction(types.EDIT_TRANSACTION);

const setError = createAction(types.SET_ERROR);

const resetError = createAction(types.RESET_ERROR);

const loaderON = createAction(types.LOADER_ON);

const loaderOFF = createAction(types.LOADER_OFF);

export {
  deleteTransaction,
  editTransaction,
  setError,
  resetError,
  loaderON,
  loaderOFF,
};
