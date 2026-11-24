import { useState } from 'react';

type Cell = 'X' | 'O' | null;

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const getWinner = (cells: Cell[]): Cell => {
  for (const [a, b, c] of LINES) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
};

const Breadsticks = () => (
  <span
    style={{ position: 'relative', display: 'inline-block', width: 70, height: 70 }}
  >
    {[45, -45].map(deg => (
      <span
        key={deg}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 76,
          height: 14,
          borderRadius: 7,
          background: 'linear-gradient(#e8b45c, #c98a2b)',
          border: '1px solid #8a5a14',
          transform: `translate(-50%, -50%) rotate(${deg}deg)`,
        }}
      />
    ))}
  </span>
);

const Pizza = () => (
  <span
    style={{
      display: 'inline-block',
      position: 'relative',
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: '#f4c542',
      border: '6px solid #c98a2b',
      boxSizing: 'border-box',
    }}
  >
    {[[9, 9], [9, 29], [29, 9], [29, 29]].map(([top, left], i) => (
      <span
        key={i}
        style={{
          position: 'absolute',
          top,
          left,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#b22222',
        }}
      />
    ))}
  </span>
);

export const MlyComponent = () => {
  const [cells, setCells] = useState<Cell[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = getWinner(cells);
  const isDraw = !winner && cells.every(Boolean);

  const handleClick = (i: number) => {
    if (cells[i] || winner) return;
    setCells(cells.map((c, idx) => (idx === i ? (xIsNext ? 'X' : 'O') : c)));
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  };

  const status = winner
    ? `Winner: ${winner === 'X' ? 'Breadsticks' : 'Pizza'}!`
    : isDraw
      ? "It's a draw!"
      : `Next: ${xIsNext ? 'Breadsticks' : 'Pizza'}`;

  return (
    <div className='mt-4'>
      <h2>Pizza Tic-Tac-Toe</h2>
      <p>{status}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 90px)',
          gap: 6,
        }}
      >
        {cells.map((cell, i) => (
          <button
            key={i}
            type='button'
            className='btn btn-outline-secondary p-0 d-flex align-items-center justify-content-center'
            style={{ width: 90, height: 90 }}
            onClick={() => handleClick(i)}
            aria-label={`Square ${i + 1}: ${cell ?? 'empty'}`}
          >
            {cell === 'X' && <Breadsticks />}
            {cell === 'O' && <Pizza />}
          </button>
        ))}
      </div>
      <button
        type='button'
        className='btn btn-primary mt-3'
        onClick={reset}
      >
        New game
      </button>
    </div>
  );
};
