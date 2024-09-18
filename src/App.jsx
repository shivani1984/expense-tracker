import "./App.css";
import React, { useState } from "react"; 
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";

export default function App() {
    

    

    return (
        <>
            <h2 className="mainHeading">Expense Tracker</h2>
            <div className="App">
                <ExpenseForm  /> 
                <div className="expenseContainer">
                    <ExpenseInfo  /> 
                    <ExpenseList  /> 
                </div>
            </div>
        </>
    );
}
