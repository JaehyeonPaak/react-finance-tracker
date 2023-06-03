import './ExpenseItem.css';
// This simply tells the build process that the CSS file should be considered.

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmout = 294.58;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">${expenseAmout}</div>
        </div>
    );
}

export default ExpenseItem;