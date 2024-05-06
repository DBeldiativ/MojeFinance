import React from 'react';

function Dashboard({ transactions }) {
  // Spočítáme celkový příjem, výdaje a počet transakcí
  const totalIncome = transactions.reduce((total, transaction) => transaction.amount > 0 ? total + transaction.amount : total, 0);
  const totalExpenses = transactions.reduce((total, transaction) => transaction.amount < 0 ? total + transaction.amount : total, 0);
  const totalTransactions = transactions.length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Celkový příjem: {totalIncome}</p>
      <p>Celkové výdaje: {totalExpenses}</p>
      <p>Počet transakcí: {totalTransactions}</p>
    </div>
  );
}

export default Dashboard;
