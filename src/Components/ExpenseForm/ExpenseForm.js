import React, { useState } from "react";
import styles from "./ExpenseForm.module.css"

export default function ExpenseForm() {

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setItem("");
        setAmount("");
    }

    return (

        <form className={styles.form} onSubmit={handleSubmit}>

            <h3>Add Transaction</h3>

            <label for="expenseon">Text</label>
            <input
                className={styles.input}
                id="expenseon"
                type="text"
                placeholder="Expense on What??"
                required

                onChange={(e)=>setItem(e.target.value)}
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
                onChange={(e)=>setAmount(e.target.value)}
            />

            <button className={styles.tranbtn}>Add Transaction</button>
        </form>
    )

}