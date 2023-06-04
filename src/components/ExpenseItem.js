import './ExpenseItem.css';
// This simply tells the build process that the CSS file should be considered.
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;