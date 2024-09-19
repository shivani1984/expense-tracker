import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";

export default function App() {
  // Create state for the expenses here
  const [expenseTextInput, setExpenseTextInput] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          expenseTextInput={expenseTextInput}
          setExpenseTextInput={setExpenseTextInput}
          addExpense={addExpense} // Pass the addExpense function to ExpenseForm
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} /> {/* Pass expenses as a prop */}
          <ExpenseList expenses={expenses} /> {/* Pass expenses as a prop */}
        </div>
      </div>
    </>
  );
}
