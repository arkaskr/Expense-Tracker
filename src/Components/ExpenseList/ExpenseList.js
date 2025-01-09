import React from "react";
import styles from "./ExpenseList.module.css";
import Transactions from '../Transactions/Transactions';

const ExpenseList=({expenses,deleteExpense,changeExpenseToUpdate})=>{

    return (

        <div className={styles.container}>
            <h3>Transactions</h3>
            <ul className={styles.transactionlist}>
                {expenses.map((expense, i) => {
                    return (
                        <Transactions
                            index={i}
                            key={expense}
                            expense={expense}
                            deleteExpense={deleteExpense}
                            changeExpenseToUpdate={changeExpenseToUpdate}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ExpenseList;