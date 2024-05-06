import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  // Lokální stavy pro uchování hodnot vstupů formuláře
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  // Obsluha odeslání formuláře
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vytvoření objektu s novou transakcí
    const newTransaction = {
      amount: parseInt(amount),
      note,
      date,
      category,
    };

    // Zavolání callbacku onAddTransaction s novou transakcí
    onAddTransaction(newTransaction);

    // Vyčištění formuláře
    setAmount('');
    setNote('');
    setDate('');
    setCategory('');
  };

  return (
    <div>
      <h2>Přidání nové transakce</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Částka:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="note">Poznámka:</label>
          <input type="text" id="note" value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Datum:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="category">Kategorie:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Přidat transakci</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
