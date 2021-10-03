import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionsHistory.module.css'

export function TransactionHistory({items}) {
  return <table className={styles.transactionHistory}>
          <thead className={styles.tableHead}>
            <tr className={styles.headRow}>
              <th className={styles.tableCell}>Type</th>
              <th className={styles.tableCell}>Amount</th>
              <th className={styles.tableCell}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return <tr key={item.id} className={styles.row}>
                      <td className={styles.tableCell}>{item.type}</td>
                      <td className={styles.tableCell}>{item.amount}</td>
                      <td className={styles.tableCell}>{item.currency}</td>
                    </tr>
            })}
          </tbody>
        </table>
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

