import React from "react";

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount} (
            {transaction.category})
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
            <button
              onClick={() => {
                const updatedDescription = prompt(
                  "Enter updated description:",
                  transaction.description
                );
                if (updatedDescription !== null) {
                  const updatedTransaction = {
                    ...transaction,
                    description: updatedDescription,
                  };
                  editTransaction(transaction.id, updatedTransaction);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
