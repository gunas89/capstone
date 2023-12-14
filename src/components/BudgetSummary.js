import React from "react";

const BudgetSummary = ({ transactions }) => {
  const calculateTotal = (category) => {
    return transactions
      .filter((transaction) => transaction.category === category)
      .reduce((total, transaction) => total + transaction.amount, 0)
      .toFixed(2);
  };

  const totalIncome = calculateTotal("income");
  const totalExpenses = calculateTotal("expense");
  const balance = (totalIncome - totalExpenses).toFixed(2);

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <div>Total Income: ${totalIncome}</div>
      <div>Total Expenses: ${totalExpenses}</div>
      <div>Balance: ${balance}</div>
    </div>
  );
};

export default BudgetSummary;
