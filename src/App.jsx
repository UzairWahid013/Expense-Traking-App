import './App.css'
import Balance from './component/Balance'
import IncomeExpense from './component/IncomeExpense'
import History from './component/History'
import AddTransaction from './component/AddTransaction'
import GlobalProvider from './context/GlobalState'
function App() {
  

  return (
    <GlobalProvider>
    <div className="App">
        <h1>Expense Tracker</h1>
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
        
    </div>
    </GlobalProvider>
  )
}

export default App
