import { combineReducers } from 'redux';
import types from '../types';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return { ...state, ...payload.user };
    case types.SIGNUP_SUCCESS:
      return { ...state, ...payload.user };
    case types.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};
// const register = (state = null, { type, payload }) => {
//   switch (type) {
//     case types.SIGNUP_SUCCESS:
//       return { ...state, ...payload.userData };
//     case types.LOGOUT_SUCCESS:
//       return null;

//     default:
//       return state;
//   }
// };

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload.token;
    case types.SIGNUP_SUCCESS:
      return payload.token;
    case types.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case types.LOGIN_START:
      return true;
    case types.LOGIN_SUCCESS:
      return false;
    case types.LOGIN_FAILURE:
      return false;

    case types.SIGNUP_START:
      return true;
    case types.SIGNUP_SUCCESS:
      return false;
    case types.SIGNUP_FAILURE:
      return false;

    case types.LOGOUT_START:
      return true;
    case types.LOGOUT_SUCCESS:
      return false;
    case types.LOGOUT_FAILURE:
      return false;

    case types.GET_CURRENT_USER_START:
      return true;
    case types.GET_CURRENT_USER_SUCCESS:
      return false;
    case types.GET_CURRENT_USER_FAILURE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({ user, token, loading });
