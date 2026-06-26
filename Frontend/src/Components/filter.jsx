import { useState } from "react";
import AddExpense from "./AddExpense";
import AddBudget from "./AddBudget";

const Filters = ({setBudget,addExpense,saveBudget}) => {
  const [showAddExpense, setshowAddExpense] = useState(false);
  const [showAddBudget, setshowAddBudget] = useState(false);

  return ( 
    <div className="flex flex-wrap gap-3 mb-10">
      <button className="px-4 py-2 border rounded-full text-sm">
        Search
      </button>

      <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">
        All Expense
      </button>

      <button className="px-4 py-2 border rounded-full text-sm">
        Food & Drink
      </button>

      <button className="px-4 py-2 border rounded-full text-sm">
        Groceries
      </button>

      <button className="px-4 py-2 border rounded-full text-sm">
        Travel
      </button>

      <button className="px-4 py-2 border rounded-full text-sm">
        Health
      </button>

      <button className="ml-auto px-4 py-2 bg-indigo-600 text-white rounded-full" onClick={() => setshowAddBudget(true)}>
        Add Budget
      </button>
      {showAddBudget && (<AddBudget onclose={()=> setshowAddBudget(false)}
       setBudget={setBudget} 
       saveBudget={saveBudget}/>)}

      <button className="px-4 py-2 bg-indigo-600 text-white rounded-full" onClick={() => setshowAddExpense(true)}>
        Add Expense
      </button>
      {showAddExpense && (<AddExpense onclose={()=> setshowAddExpense(false)}
       addExpense={addExpense} /> )}

    </div>
  );
};

export default Filters;