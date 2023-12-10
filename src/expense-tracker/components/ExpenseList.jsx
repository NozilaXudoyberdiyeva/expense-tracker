const ExpenseList = ({ expenses, onDelete }) => {
    if (expenses.length === 0) return null;

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>${Number(expense.amount).toFixed(2)}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button
                                className='btn btn-outline-danger'
                                type='button'
                                onClick={() => onDelete(expense.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>
                        $
                        {expenses
                            .reduce(
                                (acc, expense) => acc + Number(expense.amount),
                                0
                            )
                            .toFixed(2)}
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenseList;
