import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import notification from '../../services/notification';
import routes from '../../routes';

const token = {
  set(authToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = (user, history) => async dispatch => {
  dispatch({ type: types.LOGIN_START });
  try {
    const { data, status } = await API.auth.login(user);
    console.log(data);
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
    console.log(data.token);
    token.set(data.token);
    // clearForm();
    history.push('/home');
    notification({
      type: 'success',
      message: 'Login Success!',
    });
  } catch (e) {
    // dispatch({ type: types.LOGIN_FAILURE, payload: e.response.data.errors });
    console.log(e);
  }
};
export const register = (credentials, history) => async dispatch => {
  dispatch({ type: types.SIGNUP_START });
  try {
    const { data } = await API.auth.register(credentials);
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.SIGNUP_SUCCESS, payload: data });
    token.set(data.token);
    history.push('/home');
    notification({
      type: 'success',
      message: 'Register Success!',
    });
  } catch (e) {
    dispatch({ type: types.SIGNUP_FAILURE, payload: e.response.data.errors });
  }
};

export const getCurrentUser = history => async (dispatch, getState) => {};

export const logOut = history => async dispatch => {
  dispatch({ type: types.LOGOUT_START });
  try {
    const data = await API.auth.logout();
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    console.log(data);
    dispatch({ type: types.LOGOUT_SUCCESS, payload: data });
    history.push('/login');
    token.unset();
    notification({
      type: 'success',
      message: 'Logout Success!',
    });
  } catch (e) {
    console.log(e.response);
    dispatch({ type: types.LOGOUT_FAILURE });
  }
};
