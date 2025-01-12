import React, { useState, useEffect, useReducer } from 'react';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './Components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }

    case "DELETE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
}

function App() {

  useEffect(() => {
    document.title = "Expense Tracker";
  }, []);

  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const addExpense = (expense) => {
    dispatch({ type: "ADD", payload: { expense } });
  }

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  }

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  }

  const updateExpense = (expense) => {
    const expensePos = state.expenses
      .map(function (exp) {
        return exp.id;
      })
      .indexOf(expense.id);

    if (expensePos === -1) {
      return false;
    }

    dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
    return true;
  };

  return (
    <>
      <h2 className="heading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate} />
        <div className="expense">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate} />
        </div>
      </div>
    </>
  );
};

export default App;
