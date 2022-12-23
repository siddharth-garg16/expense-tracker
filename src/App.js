import React from 'react';
import Expenses from "./components/Expenses/Expenses.js";

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
      <Expenses item={itemArray}/>
    </div>
  );
}

export default App;
