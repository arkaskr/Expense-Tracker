import React from 'react';
import "./App.css";
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './Components/ExpenseInfo/ExpenseInfo';

function App() {
  return (
    <>
      <h2 className="heading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm />
        <div className="expense">
          <ExpenseInfo />
        </div>
      </div>
    </>
  );
}

export default App;
