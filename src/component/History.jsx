import React, { useContext, useState } from 'react'
import '../../style.css';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import Graph from './graph/index';

const History = () => {
  const {transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction)=>transaction.amount);
  const totalAmount = amount.reduce((acc,item) => (acc+=item), 0);

  const GraphPart = ()=>{
    return (
      <div style={{margin : 0, marginLeft : 20, marginTop:50,color: 'white', height: 220 }}>
        <Graph />
      </div>
    );
  }
  
  return (
    <>
    <div>
       <h2 style={{marginBottom: 0}}><span className="heading">History</span></h2>
       {/* <hr /> */}
       <ul>
        {transactions.map((transaction)=>(
          <Transaction key={transaction.id} transaction={transaction} />
        ))}



        {/* <li className='list'> 
         Salary <span className='amount'> +$6000</span> <button className='btn'>X</button>
        </li> */}
        
       </ul>
        <div>
       {totalAmount > 0 ? <GraphPart /> : <p style={{textAlign: 'center'}}>No Transaction added</p>}
       
       </div>

    </div>
    
    </>
  )
}

export default History