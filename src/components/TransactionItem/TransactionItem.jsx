import css from "./TransactionItem.module.css";

const TransactionItem = ({ item }) => {
  return (
    <tr className={css.transaction}>
      <td className={css.type}>{item.type}</td>
      <td className={css.amount}>{item.amount}</td>
      <td className={css.currency}>{item.currency}</td>
    </tr>
  );
};

export default TransactionItem;
