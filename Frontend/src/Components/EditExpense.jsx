import { useState, useEffect } from "react";
import axios from "axios";


const EditExpense = ({onclose, expense, expenses,fetchExpenses}) => {
const [EditExpense, setEditExpense] = useState("");
const [EditAmount, setEditAmount] = useState("");

useEffect(()=>{
    if(expense){
        setEditExpense(expense.Expense || "");
        setEditAmount(expense.amount || "");
    }
}, [expense]);



const Edit = async (id) =>{
    try{
        const res = await axios.put(`http://localhost:5000/api/edit-expense/${id}`,
            {
                Expense: EditExpense,
                amount: EditAmount,
            });

        console.log(res.data);
        alert("Expense Edited");
        fetchExpenses();
        onclose();
    }
    catch(error){
        console.log(error);
    }
}









    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              
              <div className="flex justify-between items-center mb-5">
                 <h2 className="text-xl font-bold">
                    Edit Expense
                </h2> 
                
                 <button
                      onClick={onclose}
                      className="text-xl"
                   >
                    ✕
                 </button>
            </div> 
                
                <form className="space-y-4">
                <input type="text" placeholder="Enter Expense" 
                className="w-full border p-2 rounded"
                value={EditExpense || ""}
                onChange={(e)=> setEditExpense(e.target.value)}
                 />

                <input type="text" placeholder="Enter Amount" 
                 className="w-full border p-2 rounded"
                 value={EditAmount || ""}
                 onChange={(e)=> setEditAmount(e.target.value)}/>

                </form>
                
                <button type="submit" 
                 className="bg-indigo-600 text-white px-5 py-2 rounded mt-5"
                 onClick={()=> Edit(expense.id)}
                 >
                    Update Expense
                 </button>

            </div>
        
        </div>

    )
}

export default EditExpense;