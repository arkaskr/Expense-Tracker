import React from "react";
import styles from "./ExpenseInfo.module.css"

const ExpenseInfo = ({ expenses }) => {

    let profit = 0;
    let loss = 0;

    const total = expenses.reduce((acc, currentExpense) => {
        const currentExpenseAmount = parseInt(currentExpense.amount);
        if (currentExpenseAmount < 0) {
            loss += currentExpenseAmount;
        } else {
            profit += currentExpenseAmount;
        }
        return currentExpenseAmount + acc;
    }, 0);

return (

    <div className={styles.container}>
        <div className={styles.balance}>
            <h4>YOUR BALANCE</h4>
            <h1>₹{total.toFixed(2)}</h1>
        </div>

        <div className={styles.incomeExpContainer}>
            <div>
                <h4>Income</h4>
                <p className={styles.moneyplus}>
                    +₹{profit}
                </p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className={styles.moneyminus}>
                    -₹{loss}
                </p>
            </div>
        </div>
    </div>
);
};

export default ExpenseInfo;