import './Expenses.css';
import Card from '../UI/Card.js';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.js';
import { useState } from "react";
import ExpensesList from './ExpensesList.js';

const Expenses = (props) => {
    let [enteredYear, setEnteredYear] = useState('2021');

    const changeYearHandler = (year) => {
        setEnteredYear(year);
    };

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === enteredYear);

    return (
        <Card className="expenses">
            <ExpenseFilter year={enteredYear} onChangeYear={changeYearHandler}></ExpenseFilter>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;