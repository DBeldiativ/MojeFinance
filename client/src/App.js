import React, { useState } from 'react';
import AddTransactionForm from './AddTransactionForm';
import Dashboard from './Dashboard';

function App() {
  // Vytvoření stavu pro uchování seznamu transakcí
  const [transactions, setTransactions] = useState([]);

  // Funkce pro přidání nové transakce do seznamu
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      {/* Komponenta pro přidání transakce */}
      <AddTransactionForm onAddTransaction={handleAddTransaction} />

      {/* Komponenta Dashboard */}
      <Dashboard transactions={transactions} />
    </div>
  );
}

export default App;

