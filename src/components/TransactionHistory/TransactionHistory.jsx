import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

export default class TransactionHistory extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    const { items } = this.props;
    return (
      <div className={styles.container}>
        <table className={styles.transactionHistory}>
          <thead className={styles.header}>
            <tr>
              <th className={styles.header}>Type</th>
              <th className={styles.header}>Amount</th>
              <th className={styles.header}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr className={styles.itemRow} key={item.id}>
                <td className={styles.itemType}>{item.type}</td>
                <td className={styles.itemAmount}>{item.amount}</td>
                <td className={styles.itemCurrency}>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
