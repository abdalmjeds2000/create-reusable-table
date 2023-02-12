import React from 'react';
import './style.css';
import Table from './Table';

export default function App() {
  const data = [
    { name: 'Apple', color: 'bg-red-400', score: 1 },
    { name: 'Banana', color: 'bg-yellow-400', score: 4 },
    { name: 'Sea', color: 'bg-blue-400', score: 7 },
    { name: 'Nature', color: 'bg-green-400', score: 3 },
    { name: 'Orange', color: 'bg-orange-400', score: 5 },
  ];
  const config = [
    {
      label: 'Name',
      render: (row) => row,
    },
    {
      label: 'Color',
      render: (row) => <div className={`p-3 m-2 ${row.color}`} />,
    },
    {
      label: 'Score',
      render: (row) => row,
    },
  ];

  return (
    <div>
      <Table config={config} data={data} />
    </div>
  );
}
