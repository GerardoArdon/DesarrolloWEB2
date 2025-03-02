import { useContext, useEffect } from "react";
import { BudgetStateContext } from "./context/BudgetContext"
import { BudgetForm } from "./components/BudgetForm.jsx"
import { BudgetTracker } from "./components/BudgetTracker.jsx"
import ExpenseModal from "./components/ExpenseModal.jsx"
import {ExpenseList} from "./components/ExpenseList.jsx"
import { FilterByCategory } from "./components/FilterByCategory"

function App() {
  const state = useContext(BudgetStateContext);
  const isValidBudget = state.budget > 0;

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
  }, [state.budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state.expenses])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
            <FilterByCategory />
            <ExpenseList />
            <ExpenseModal />
        </main>
      )}
    </>
  );
}


export default App;


