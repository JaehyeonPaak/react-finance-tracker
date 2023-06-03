import './ExpenseItem.css';
// This simply tells the build process that the CSS file should be considered.

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>June 22th 1999</div>
            <div className="expense-item__description">
                <h2>Car insurance</h2>
            </div>
            <div className="expense-item__price">$203.24</div>
        </div>
    );
}

export default ExpenseItem;