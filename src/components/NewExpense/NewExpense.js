import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

        setstartEditing(false);
    };

    const [startEditing, setstartEditing] = useState(false);

    const startEditingHandler = () => {
        setstartEditing(true);
    }

    const stopEditingHandler = () => {
        setstartEditing(false);
    };

    return (
        <div className="new-expense">
            {!startEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {startEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>
            )}
        </div>
    );
}

export default NewExpense;