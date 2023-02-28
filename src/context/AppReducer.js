const AppReducer = (state, action ) => {
    switch(action.type){
        case "DeleteTransaction":
            return{
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
        case "AddTransaction" :
            return{
                ...state,
                transactions : [action.payload, ...state.transactions]
            };    
        default:
            return state;
    }
};

export default AppReducer;