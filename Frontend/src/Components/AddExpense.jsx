import { useState } from "react";

const AddExpense = ({onclose, addExpense}) => {
const [name, setName] = useState(""); 
const [Expense, setExpense] = useState("");  
const [amount, setAmount] = useState("");

const submit = async (e) =>{
  e.preventDefault();
  await   addExpense({
    name: name, 
    Expense: Expense, 
    amount: amount,
  });
  
  setName("");
  setExpense("");
  setAmount("");
  onclose();
};

  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">
            Add Expense
          </h2>

          <button
            onClick={onclose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input type="text"
                 placeholder="Enter Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 className="w-full border p-2 rounded" 
                 />

          <input
            type="text"
            placeholder="Enter Expense"
            value={Expense}
            onChange={(e) => setExpense(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
          />        

          
          </form>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded mt-5"
            onClick={submit}
          >
            Add Expense
          </button>
      </div>
    </div>
  );
};

export default AddExpense;