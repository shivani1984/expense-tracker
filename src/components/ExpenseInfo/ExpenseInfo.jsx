import React, { useEffect, useState } from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    const totals = expenses.reduce(
      (acc, expense) => {
        if (expense.amount > 0) {
          acc.totalProfit += expense.amount; // Add to profit
        } else {
          acc.totalExpense += Math.abs(expense.amount); // Add to expenses
        }
        return acc;
      },
      { totalProfit: 0, totalExpense: 0 }
    );

    setTotalProfit(totals.totalProfit);
    setTotalExpense(totals.totalExpense);
  }, [expenses]);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${totalProfit - totalExpense}</h1> {/* Calculate balance */}
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${totalProfit} {/* Total Profit Amount */}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${totalExpense} {/* Total Expense Amount */}
          </p>
        </div>
      </div>
    </div>
  );
}
