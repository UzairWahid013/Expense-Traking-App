import React, { useContext, useState } from 'react'
import '../../style.css';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const History = () => {
  const [color, setColor] = useState("");

  const {transactions} = useContext(GlobalContext);
  return (
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

    </div>
  )
}

export default History