import axios from 'axios';

const getCurrencyValue = () => {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
<<<<<<< HEAD
    .then(response => response.data)
=======
    .then(response => {
      return response.data;
    })
>>>>>>> dev
    .catch(error => console.log(error));
};

getCurrencyValue();

export default { getCurrencyValue };
