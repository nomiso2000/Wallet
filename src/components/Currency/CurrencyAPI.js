import axios from 'axios';

const getCurrencyValue = () => {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => response.data)
    .catch(error => console.log(error));
};

getCurrencyValue();

export default { getCurrencyValue };
