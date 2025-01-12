import React, { useEffect, useState } from "react";
import styles from "./ExpenseForm.module.css"

const ExpenseForm = ({ addExpense,
  expenseToUpdate,
  updateExpense,
  resetExpenseToUpdate }) => {

  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")

  useEffect(() => {
    if (!expenseToUpdate) return;
    setItem(expenseToUpdate.item);
    setAmount(expenseToUpdate.amount);
  }, [expenseToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(amount) === 0) {
      return;
    }

    if (!expenseToUpdate) {
      const expense = {
        item,
        amount,
        id: new Date().getTime()
      };
      addExpense(expense);
      clearInput();
      return;
    }

    const expense = {
      item,
      amount,
      id: expenseToUpdate.id
    };

    const result = updateExpense(expense);
    if (!result) return;
    clearInput();
    resetExpenseToUpdate();

  };

  const clearInput = () => {
    setItem("");
    setAmount("");
  };

  return (

    <form className={styles.form} onSubmit={handleSubmit}>

      <h3>Add Transaction</h3>

      <label htmlFor="expenseon">Text</label>
      <input
        className={styles.input}
        id="expenseon"
        type="text"
        placeholder="Expense on What??"
        required
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>

      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className={styles.tranbtn}>
        {expenseToUpdate ? "Edit" : "Add"}Transaction</button>
    </form>
  )

}

export default ExpenseForm;