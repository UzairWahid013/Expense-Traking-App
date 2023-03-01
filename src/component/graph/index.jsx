import DonutChart from "react-donut-chart";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";





export default function Graph() {
    const {transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction)=>transaction.amount);
  const totalAmount = amount.reduce((acc,item) => (acc+=item), 0);
  const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts.filter((item)=>item>0).reduce((acc,item)=> (acc += item),0);
    const expense = amounts.filter((item)=>item<0).reduce((acc,item)=> (acc += item),0);
    const expenseamount = Math.abs(expense);

    const reactDonutChartdata = [
        {
          label: "Total Balance",
          value: totalAmount,
        },
        {
          label: "Income",
          value: income,
        },
        {
          label: "Expense",
          value: expenseamount,
        },
        
      ];
      const reactDonutChartBackgroundColor = [
        "#FFA500",
        "#008000",
        "red",
      ];
      const reactDonutChartInnerRadius = 0.6;
      const reactDonutChartSelectedOffset = 0.04;
      const reactDonutChartHandleClick = (item, toggled) => {
        if (toggled) {
          console.log(item);
        }
      };
    //   let reactDonutChartStrokeColor = "none";
    //   const reactDonutChartOnMouseEnter = (item) => {
    //     let color = reactDonutChartdata.find((q) => q.label === item.label).color;
    //     reactDonutChartStrokeColor = color;
    //   };  
  return (
    <div>
      <DonutChart 
        width={300}
        height={300}
        
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
  );
}
