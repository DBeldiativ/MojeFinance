// SetLimitForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SetLimitForm() {
  const [category, setCategory] = useState('');
  const [limitAmount, setLimitAmount] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Chyba při získávání kategorií:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/limits', { category, limitAmount });
      console.log('Limit byl úspěšně nastaven');
    } catch (error) {
      console.error('Chyba při nastavování limitu:', error);
    }
    setCategory('');
    setLimitAmount('');
  };

  return (
    <div>
      <h2>Nastavení limitu pro kategorii</h2>
      <form onSubmit={handleSubmit}>
        <label>Vyberte kategorii:</label><br />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Vyberte...</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select><br />
        <label>Částka limitu:</label><br />
        <input type="number" value={limitAmount} onChange={(e) => setLimitAmount(e.target.value)} /><br /><br />
        <button type="submit">Nastavit limit</button>
      </form>
    </div>
  );
}

export default SetLimitForm;
