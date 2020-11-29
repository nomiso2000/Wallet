// import axios from 'axios';

const getCurrencyValue = () => {
<<<<<<< HEAD
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => response.data)
    .catch(error => console.log(error));
=======
  return fetch(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
>>>>>>> dev
};

export default { getCurrencyValue };

// return axios
//   .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//   .then(response => {
//     return response.data;
//   })
//   .catch(error => console.log(error));
