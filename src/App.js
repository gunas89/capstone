import React, { useState, useEffect } from "react";
import "./App.css";
import IncomeExpenseForm from "./components/IncomeExpenseForm";
import BudgetSummary from "./components/BudgetSummary";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("API URL:", process.env.REACT_APP_API_URL);
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const editTransaction = (id, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <IncomeExpenseForm
        addTransaction={addTransaction}
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
      <BudgetSummary transactions={transactions} />
    </div>
  );
}

export default App;
