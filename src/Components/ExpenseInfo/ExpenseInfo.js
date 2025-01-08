import React from "react";
import styles from "./ExpenseInfo.module.css"

export default function ExpenseInfo() {

    return (

        <div className={styles.container}>
            <div className={styles.balance}>
                <h4>YOUR BALANCE</h4>
                <h1>₹</h1>
            </div>

            <div className={styles.incomeExpContainer}>
                <div>
                    <h4>Income</h4>
                    <p className={styles.moneyplus}>
                        +₹
                    </p>
                </div>

                <div>
                    <h4>Expense</h4>
                    <p className={styles.moneyminus}>
                        -₹
                    </p>
                </div>
            </div>
        </div>
    )
}