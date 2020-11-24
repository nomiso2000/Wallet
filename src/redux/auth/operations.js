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

// export const logIn = (user, clearForm) => async dispatch => {
//   dispatch({ type: types.LOGIN_START });
//   try {
//     const { data, status } = await API.auth.login(user);
//     // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
//     dispatch({ type: types.LOGIN_SUCCESS, payload: data });
//     token.set(data.token);
//     clearForm();
//     notification({
//       type: 'success',
//       message: 'Login Success!',
//     });
//   } catch (e) {
//     dispatch({ type: types.LOGIN_FAILURE, payload: e.response.data.errors });
//   }
// };
export const register = credentials => async dispatch => {
  dispatch({ type: types.SIGNUP_START });
  try {
    const { data } = await API.auth.register(credentials);
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.SIGNUP_SUCCESS, payload: data });
    token.set(data.token);
    console.log(data);
    notification({
      type: 'success',
      message: 'Login Success!',
    });
  } catch (e) {
    dispatch({ type: types.SIGNUP_FAILURE, payload: e.response.data.errors });
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {};

export const logOut = () => async dispatch => {};
