import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionsHistory.module.css'

export function TransactionHistory({items}) {

  return <table className={styles.transactionHistory}>
          <thead className={styles.tableHead}>
            <tr className={styles.headRow}>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return <tr key={item.id} className={styles.row}>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                      <td>{item.currency}</td>
                    </tr>
            })}
          </tbody>
        </table>
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

