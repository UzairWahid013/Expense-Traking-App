import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction)=>transaction.amount);
  const totalAmount = amount.reduce((acc,item) => (acc+=item), 0).toFixed(2);
  return (
    <div>
        <h3 style={{margin : 0}}>YOUR BALANCE </h3>
        <h1 style={{margin : 0, marginBottom: 25, color: 'orange'}}>${totalAmount} </h1>
    </div>
  )
}

export default Balance