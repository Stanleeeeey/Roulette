import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {


  const data = await req.json();

  // Walidacja danych
  console.log(data)

  let {amount, betNumber} = data;

  if (typeof amount !== 'number' || typeof betNumber !== 'number') {
    return NextResponse.json({ error: 'Niepoprawne dane' });

    return;
  }

  // Symulacja obrotu ruletki – losujemy liczbę od 0 do 36
  const resultNumber = Math.floor(Math.random() * 37);
  
  // Sprawdzenie, czy zakład jest trafiony
  const win = betNumber === resultNumber;

  return NextResponse.json({ resultNumber, win });
}