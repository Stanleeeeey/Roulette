"use client";

import React, { useState } from 'react';

interface Bet {
  amount: number;
  betNumber: number;
}

interface BetError{
  message: string,
}

export default function RouletteForm() {
  // Inicjalizacja stanu zakładu
  const [bet, setBet] = useState<Bet>({ amount: 0, betNumber: 0 });
  // Uzupełnij: ustawienie stanu error; typ np. string lub null (domyślnie null)
  const [error, setError] = useState<BetError>({message: ''}); 

  // Uzupełnij: określ typ zdarzenia 
  const handleSubmit = async (e: any ) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bet)
      });

      console.log(JSON.stringify(bet));
      const result = await response.json();
      console.log('Wynik ruletki:', result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Kwota zakładu:
        <input
          type="number"
          value={bet.amount}
          onChange={(e) =>
            setBet({ ...bet, amount: Number(e.target.value) })
          }
        />
      </label>
      <label>
        Zakład na numer:
        <input
          type="number"
          value={bet.betNumber}
          onChange={(e) =>
            setBet({ ...bet, betNumber: Number(e.target.value) })
          }
        />
      </label>
      <button type="submit">Zakreć ruletką</button>
      {error && <p>Błąd: {error.message}</p>}
    </form>
  );
}