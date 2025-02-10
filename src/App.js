import React, { useState, useEffect, useReducer } from 'react';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './Components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import "./App.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from './FirebaseInit';

// Reducer function to manage state changes
const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD": {
      const alreadyExists = state.expenses.some(exp => exp.id === payload.expense.id);
      if (alreadyExists) return state;
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }

    case "DELETE": {
      return {
        expenses: state.expenses.filter(expense => expense.id !== payload.id) // Remove expense from state
      };
    }

    case "UPDATE_EXPENSE": {
      const updatedExpenses = state.expenses.map((expense) =>
        expense.id === payload.expense.id ? payload.expense : expense // Update the correct expense
      );
      return {
        expenses: updatedExpenses,
      };
    }

    default:
      return state;
  }
};

function App() {
  useEffect(() => {
    document.title = "Expense Tracker";
  }, []);

  // Initialize state with reducer
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  // Function to add an expense
  const addExpense = (expense) => {
    if (!expense || !expense.id) return;
    dispatch({ type: "ADD", payload: { expense } });
  };

  // Function to delete an expense
  const deleteExpense = async (id) => {
    try {
      const docRef = doc(db, "expenses", id);
      await deleteDoc(docRef); // Delete from Firestore
      dispatch({ type: "DELETE", payload: { id } }); // Update state
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  // Reset the expense to update when editing
  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  // Function to update an expense
  const updateExpense = (expense) => {
    dispatch({ type: "UPDATE_EXPENSE", payload: { expense } });
  };

  return (
    <>
      <h2 className="heading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm 
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate} 
        />
        <div className="expense">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList 
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
