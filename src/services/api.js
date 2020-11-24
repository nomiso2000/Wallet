import axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

export default {
  auth: {
    login: data => axios.post(`api/user/sign-in`, data),
    register: data => axios.post(`/api/auth/sign-up`, data),
    getCurrentUser: () => axios.get('/api/users/current'),
    logout: () => axios.post('/api/user/sign-out'),
  },
};
