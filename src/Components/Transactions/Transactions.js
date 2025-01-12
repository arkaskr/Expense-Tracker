import React, { useState } from "react";
import styles from "./Transactions.module.css";
import EditImage from '../../images/edit.png';
import RemoveImage from '../../images/trash-bin.png';

const Transactions = ({ expense, deleteExpense, changeExpenseToUpdate, index }) => {
    const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

    return (
        <li
            key={expense.id}
            className={`${styles.transaction} ${expense.amount > 0 ? styles.profit : styles.loss}`}
            onMouseOver={() => {
                setCurrentHoverIndex(index);
            }}
            onMouseLeave={() => {
                setCurrentHoverIndex(null);
            }}>

            <div className={styles.item}>{expense.item}</div>

            <div className={styles.editremove}>

                <div
                    className={`${styles.amount} ${currentHoverIndex === index && styles.movePrice}`}>
                    ₹{expense.amount}
                </div>

                <div className={`${styles.btnContainer} ${currentHoverIndex === index && styles.active}`}>

                    <div className={styles.edit} onClick={() => { changeExpenseToUpdate(expense) }}>
                        <img src={EditImage} height="100%" alt="edit" />
                    </div>

                    <div className={styles.remove} onClick={() => deleteExpense(expense.id)}>
                        <img src={RemoveImage} height="100%" alt="edit" />
                    </div>

                </div>
            </div>
        </li>
    );
};

export default Transactions;