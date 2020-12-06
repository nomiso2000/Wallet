import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './StylesForTransanctionHistory';

const TransactionHistory = ({ items }) => {
  return (
    <Styles.TableTransactionHistory className="transaction-history">
      <Styles.TableHeaderRow>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Styles.TableHeaderRow>

      <tbody>
        {items.map(item => (
          <Styles.TableRow isEven={items.indexOf(item) % 2 === 0} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </Styles.TableRow>
        ))}
      </tbody>
    </Styles.TableTransactionHistory>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
