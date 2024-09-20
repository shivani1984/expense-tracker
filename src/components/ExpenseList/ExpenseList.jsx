import React from "react";
import styles from "./ExpenseList.module.css";

export default function ExpenseList({ expenses }) {
  return (
    <>
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <li key={index} className={styles.transactionItem}>
                {expense.text}:  ${expense.amount.toFixed(2)}
              </li>
            ))
          ) : (
            <li>No transactions to display</li>
          )}
        </ul>
      </div>
    </>
  );
} 
