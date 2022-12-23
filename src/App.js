import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  // let expenseDate = new Date(2022, 12, 12);
  // let expenseAmount = 300;
  // let expenseTitle = "School Fee";
  let itemArray = [
    {
      id:"e1",
      title:"school",
      amount:300,
      date:new Date(2022, 12, 12)
    },
    {
      id:"e2",
      title:"insurance",
      amount:500,
      date:new Date(2022, 10, 10)
    },
    {
      id:"e3",
      title:"rent",
      amount:750,
      date:new Date(2022, 9, 9)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={itemArray[0].date} title={itemArray[0].title} amount={itemArray[0].amount}></ExpenseItem>
      <ExpenseItem date={itemArray[1].date} title={itemArray[1].title} amount={itemArray[1].amount}></ExpenseItem>
      <ExpenseItem date={itemArray[2].date} title={itemArray[2].title} amount={itemArray[2].amount}></ExpenseItem>
    </div>
  );
}

export default App;
