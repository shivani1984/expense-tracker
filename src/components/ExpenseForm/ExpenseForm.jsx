import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ expenseTextInput, setExpenseTextInput, addExpense }) {
  const [expenseAmountInput, setExpenseAmountInput] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseTextInput && expenseAmountInput) {
      // Call addExpense to add the new expense
      addExpense({
        text: expenseTextInput,
        amount: parseFloat(expenseAmountInput),
      });

      // Reset input fields
      setExpenseTextInput("");
      setExpenseAmountInput("");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          value={expenseTextInput}
          onChange={(e) => setExpenseTextInput(e.target.value)}
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense, positive - income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          value={expenseAmountInput}
          onChange={(e) => setExpenseAmountInput(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitBtn}>
          Add Transaction
        </button>
      </form>
      
    </>
  );
}
