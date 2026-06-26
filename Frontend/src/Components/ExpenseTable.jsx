import { useState } from "react";
import EditExpense from "./EditExpense";
import axios from "axios";


const ExpenseTable = ({expenses,fetchExpenses}) => {
const [showEditExpense, setshowEditExpense] = useState(false);
const [editIndex, setEditIndex] = useState(null);
const Delete = async (id)=>{
  try{
      const res = await axios.delete(`http://localhost:5000/api/delete-expense/${id}`);
    alert("Expense deleted");
    fetchExpenses();
  }
  
  catch(error){
    console.log(error);
  }
};

  return (
    <div className="overflow-hidden border rounded-xl">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3">Sr.</th>
            <th className="p-3">Expense</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Edit/Delete</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item, index) => (
            <tr
              key={index}
              className="border-t"
            >
              <td className="p-3 text-center">{index + 1}</td>

              <td className="p-3 text-center">
                {item.Expense}
              </td>

              <td className="p-3 text-center">
                ₹{item.amount}
              </td>

              <td className="p-3 flex gap-2 justify-center">
                <button className="px-3 cursor-pointer py-1 bg-gray-100 rounded"
                onClick={()=>{
                  setEditIndex(index);
                  setshowEditExpense(true);
                }}>
                  Edit
                </button>
              {showEditExpense && (<EditExpense onclose={()=>  setshowEditExpense(false)}
              editIndex={editIndex}
              fetchExpenses={fetchExpenses}
              expense={expenses[editIndex]}
               />)}

                <button className="px-3 py-1 cursor-pointer bg-red-100 text-red-600 rounded"
                 onClick={()=> Delete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;