import axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

const postItem = value => {
  axios
    .post('/api/transactions', value)
    .then(response => response)
    .catch(error => error);
};

export default postItem;
