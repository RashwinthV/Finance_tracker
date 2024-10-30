import React from 'react';
import 'boxicons';

const obj = [
  {
    name: 'Savings',
    type: 'savings',
    amount: 3000
  },
  {
    name: 'Expense',
    type: 'savings',
    amount: 3000
  },
  {
    name: 'Food',
         type: 'savings',
    amount: 3000
  },
  {
   name: 'Snack',
   type: 'savings',
   amount: 3000
 }
];

export default function List() {
  return (
    <div className="d-flex flex-column py-4 gap-3">
      <h1 className="py-3 fw-bold fs-5 ms-3">History</h1>
      {obj.map((v, i) => (
        <Transaction key={i} category={v} />
      ))}
    </div>
  );
}

function Transaction({ category }) {
  return (
    <div className="item d-flex justify-content-between align-items-center bg-light py-2 px-3 rounded border">
        <button className='btn px-2 border bg-light outline'>   <box-icon size="20px" name="trash" color="red"></box-icon></button>
      <span className="fw-bold text-muted">{category.name??''}</span>
      <span className="text-dark">₹{category.amount??''}</span>
    </div>
  );
}
