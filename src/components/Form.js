import React from 'react';
import {useForm} from 'react-hook-form';
import List from './List';

export default function Form() {


    const {register,handleSubmit,resetfield}=useForm();

    const onsubmit=(data)=>{
        console.log(data)
    }


    return (
    <div className="form mx-auto" style={{ maxWidth: '24rem' }}>
      <h1 className="fw-bold pb-3 h4">Transactions</h1>
      <form id="form" onSubmit={handleSubmit(onsubmit)}>
        <div className="d-grid gap-3">
          <div className="input-group">
            <input type="text" {...register('name')} className="form-control" placeholder="Enter expense" />
          </div>
          <select className="form-select" {...register('type')}>
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input type="text" {...register('amount')} className="form-control" placeholder="Amount" />
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary fw-bold w-100 fs-6">
              Save Transaction
            </button>
            </div>
        </div>
      </form>
      <List/>
    </div>
  );
}
