import React, {useEffect, useState} from "react";
import styles from "./ExpenseInfo.module.css";
import App from "../../App";

export default function ExpenseInfo ({expenses}) {
  const[totalExpense,setTotalExpense]=useState(0);
  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpense(total);
  }, [expenses]);
  
    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>
            ${totalExpense}</h1>
          

            
          
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${/*Total Profit Amount should be displayed here */}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${/* Total expense amount should be displayed here */}
            </p>
          </div>
        </div>
      </div>
    );
  }

