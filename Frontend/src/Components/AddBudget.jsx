import { useState } from "react";

const AddBudget = ({onclose, saveBudget}) =>{
const [amount, setAmount] = useState("");  

const submit = async (e) => {
   e.preventDefault();
   await saveBudget(Number(amount));
   setAmount("");
   onclose();
};



    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold">
                    Add Budget
                </h2>

                <button
                onClick={onclose}
                className="text-xl"
                >
                  ✕
                </button>
                </div>

             <form className="space-y-4">
                <input 
                type="text" value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full border p-2 rounded" />
           </form>

                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-5 py-2 rounded mt-5"
                  onClick={submit}
                   >
                Add Budget
                </button>
        </div>
        </div>
    )
}

export default AddBudget;