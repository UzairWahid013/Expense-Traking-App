import React, { useContext, useState } from "react";
import "./style.css";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit =(e)=>{
    e.preventDefault();
    if(amount === 0){
      alert("Transaction not Added \n 'Amount Can't be Zero'");
    }
    else{
    const newTransaction = {
      id : Math.floor(Math.random()*9999999),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  }
    setTitle('');
    setAmount(0);
  }
  return (
    <div>
      <h2 style={{ marginBottom: 0, marginTop: 40}} > <span className="heading">Add New Transaction</span></h2>
     
      <form  onSubmit={onSubmit}>
        <div className="form">
        <div className="form-control">
          <label>Title</label> <br />
          <input
            type="text"
            value={text}
            placeholder="Enter text ....."
            onChange={(e) => {
            setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Amount</label> <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => {
            setAmount(e.target.value);
            }}
          />

        </div>
        </div>
        <button className="addBtn">Add Transaction</button>
      </form>
      
    </div>
  );
};

export default AddTransaction;
