import React, { useEffect, useState } from "react";
import styles from "./ExpenseForm.module.css";
import { db } from "../../FirebaseInit";
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";

const ExpenseForm = ({ addExpense, expenseToUpdate, updateExpense, resetExpenseToUpdate }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!expenseToUpdate) return;
    setItem(expenseToUpdate.item);
    setAmount(expenseToUpdate.amount);
  }, [expenseToUpdate]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "expenses"), (snapShot) => {
      const expenses = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      expenses.forEach(expense => addExpense(expense));
    });

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(amount) === 0) return;

    if (expenseToUpdate) {
      const docRef = doc(db, "expenses", expenseToUpdate.id);
      try {
        await updateDoc(docRef, {
          item,
          amount: parseInt(amount),
          createdOn: new Date().getTime(),
        });

        const updatedExpense = {
          item,
          amount,
          id: expenseToUpdate.id,
        };

        updateExpense(updatedExpense);
        resetExpenseToUpdate();
      } catch (error) {
        console.error("Error updating expense: ", error);
      }
      return;
    }


    try {
      const docRef = await addDoc(collection(db, "expenses"), {
        item,
        amount: parseInt(amount),
        createdOn: new Date().getTime(),
      });

      const newExpense = {
        item,
        amount,
        id: docRef.id,
      };

      addExpense(newExpense);
      clearInput();
    } catch (error) {
      console.error("Error adding expense: ", error);
    }
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
        {expenseToUpdate ? "Edit " : "Add "}Transaction</button>
    </form>
  )
};

export default ExpenseForm;
