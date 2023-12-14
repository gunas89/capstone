import React, { useState } from "react";
import TransactionList from "./TransactionList";

const IncomeExpenseForm = ({
  addTransaction,
  transactions,
  deleteTransaction,
  editTransaction,
}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || isNaN(amount) || amount <= 0) {
      alert("Please enter valid description and amount.");
      return;
    }
    const transaction = {
      id: new Date().getTime(),
      description,
      amount: parseFloat(amount),
      category,
    };
    addTransaction(transaction);
    setDescription("");
    setAmount("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
    </div>
  );
};

export default IncomeExpenseForm;
