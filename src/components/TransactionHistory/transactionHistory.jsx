import css from "./transactionHistory.module.css"
import _ from 'lodash';
import PropTypes from "prop-types";


export const TransactionHistory =({transactions})=>(
    <table className={css['transaction-history']}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(transaction=>
    (<tr>
      <td> {_.capitalize(transaction.type)}</td>
      <td>125</td>
      <td>USD</td>
    </tr>))
    }
  </tbody>
</table>
);

TransactionHistory.propTypes = {data: PropTypes.array.isRequired};