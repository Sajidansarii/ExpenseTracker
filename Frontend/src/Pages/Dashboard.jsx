import Header from '../Components/Header';
import SummaryCards from '../Components/SamarryCard';
import Filters from '../Components/filter';
import ChartSection from '../Components/chartSection';
import ExpenseTable from '../Components/ExpenseTable';
import { useEffect, useState } from 'react';
import axios from "axios";

const Dashboard = () => {
  const [expenses, setexpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const totalExpenses = expenses.reduce((total,item)=>{
    return  total + Number(item.amount);
  },0);
  

  const fetchExpenses = async()=>{
    const res = await axios.get("http://localhost:5000/api/get-expense");
    setexpenses(res.data.data);
  };

  const addExpense = async (expenseData) =>{
    await axios.post("http://localhost:5000/api/add-expense", expenseData);
    fetchExpenses();
  };

  const fetchBudget = async () =>{
    try{
      const res = await axios.get(`http://localhost:5000/api/get-budget`);
      setBudget(res.data.data.amount);
    }
    catch(error){
      console.log(error);
    }
  };

  const saveBudget = async (amount) =>{
    await axios.post(`http://localhost:5000/api/add-budget`, {amount});
    await fetchBudget();
  };

  
  useEffect(()=>{
    fetchExpenses();
    fetchBudget();
    
  }, []);



  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Header />
        <SummaryCards 
        budget={budget}
        totalExpenses ={totalExpenses} />
        <Filters 
          setBudget={setBudget}
          addExpense={addExpense}
          saveBudget={saveBudget}/>
        <ChartSection />
        <ExpenseTable
        expenses={expenses} 
        fetchExpenses={fetchExpenses}/>
      </div>
    </div>
  );
};

export default Dashboard;