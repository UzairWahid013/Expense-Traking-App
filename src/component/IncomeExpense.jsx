import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import styled from 'styled-components'
const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts.filter((item)=>item>0).reduce((acc,item)=> (acc += item),0).toFixed(2);
    const expense = amounts.filter((item)=>item<0).reduce((acc,item)=> (acc += item),0);
    const newValue = Math.abs(expense);
    const expenseamount = newValue.toFixed(2);
    return (
    <MainContainer>
        <SubDiv1>
            <H4>Income</H4>
            <P1>+ ${income}</P1>
        
        </SubDiv1>
        <SubDiv1>
        <H4>Expense</H4>
            <P2>- ${expenseamount}</P2>
        </SubDiv1>
    </MainContainer>
  )
}

export default IncomeExpense


const MainContainer = styled.div`
    width : 430px;
    height : 100px;
    background-Color : white;
    color : black;
    display: flex;
    /* flex-direction: row; */
    border-radius : 10px;
`;
const SubDiv1 = styled.div`
    /* background-Color : grey; */
    width : 50%;
    height : auto;
    border-left : 1px solid black;
    text-align : center;
    
`;
const H4 = styled.h4`
    font-size : 25px;
    /* font-weight: bold; */
    margin : 0;
    padding : 2px;
`;
const P1 = styled.p`
    color: green;
    font-size : 20px;
    margin : 0;
    font-weight : bold;
`;
const P2 = styled.p`
    color: red;
    font-size : 20px;
    margin : 0;
    font-weight : bold;
`;
