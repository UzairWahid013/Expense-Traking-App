import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        // {id: 1, text: "salary", amount: 400 },
        // {id: 2, text: "Rent", amount: -150 },
    ],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

// Delete Tranaction from History 
const deleteTransaction = (id) =>{
    dispatch({
        type : "DeleteTransaction",
        payload : id,
    });
}
// Add Transaction to account:
const addTransaction = (transaction) =>{
    dispatch({
        type : "AddTransaction",
        payload : transaction,
    });
}

return(
 <GlobalContext.Provider value={{transactions : state.transactions, deleteTransaction,addTransaction }}>
    {children}
</GlobalContext.Provider>
);
};

export default GlobalProvider;