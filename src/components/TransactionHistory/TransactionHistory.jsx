import _ from 'lodash';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => (
  <table className={css['transaction-history']}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      { 
      transactions.map(transaction => (
        <tr>
          <td> {_.capitalize(transaction.type)}</td>
          <td>125</td>
          <td>USD</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = { data: PropTypes.array.isRequired };

TransactionHistory.propTypes = {
  transactions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
