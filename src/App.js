import React from 'react';
import './style.css';
import Table from './Table';
import SortableTable from './SortableTable.jsx';

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
      // header not for srtable table
      // header: () => <th>Name H</th>,
      label: 'Name',
      render: (row) => row.name,
      sortValue: (row) => row.name,
    },
    {
      label: 'Color',
      render: (row) => <div className={`p-3 m-2 ${row.color}`} />,
    },
    {
      label: 'Score',
      render: (row) => row.score,
      sortValue: (row) => row.score,
    },
  ];
  const keyFn = (row) => {
    return row.name;
  };
  return (
    <div>
      <SortableTable config={config} data={data} keyFn={keyFn} />
    </div>
  );
}
