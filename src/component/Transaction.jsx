import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  const theme = transaction.amount > 0 ? "green" : "red";
  return (
    <div>
      <li className={theme}>
        {transaction.text}
        <span className="amount">
          {sign} ${Math.abs(transaction.amount)}
        </span>{" "}
        <button
          className="btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Transaction;
