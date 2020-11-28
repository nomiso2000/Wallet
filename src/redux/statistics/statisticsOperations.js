import axios from 'axios';

// import API from '../../services/api';
import statsticsActions from './statisticsActions';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

const fetchTransactionsSummary = (year, month) => dispatch => {
  dispatch(statsticsActions.transactionsSummaryRequest());

  axios
    .get(`/api/transactions-summary?month=${month}&year=${year}`)
    .then(response =>
      dispatch(statsticsActions.transactionsSummarySuccess(response.data)),
    )
    .catch(error => dispatch(statsticsActions.transactionsSummaryError(error)));
};
const fetchAllTransactions = () => dispatch => {
  dispatch(statsticsActions.allTransactionsRequest());
  axios
    .get(`/api/transactions`)
    .then(response =>
      dispatch(
        statsticsActions.allTransactionsSuccess(response.data),
      ).catch(error => dispatch(statsticsActions.allTransactionsError(error))),
    );
};

export default { fetchTransactionsSummary, fetchAllTransactions };
