const ExpenseForm = ({ onSubmit }) => {
    return (
        <form onSubmit={(evt) => onSubmit(evt)}>
            <div className='mb-3'>
                <label htmlFor='description' className='form-label'>
                    Description
                </label>
                <input id='description' type='text' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='amount' className='form-label'>
                    Amount
                </label>
                <input id='amount' type='number' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='category' className='form-label'>
                    Category
                </label>
                <select id='category' className='form-select'>
                    <option value=''></option>
                    <option value='Groceries'>Groceries</option>
                    <option value='Utilities'>Utilities</option>
                    <option value='Entertainment'>Entertainment</option>
                </select>
            </div>
            <button className='btn btn-primary' type='submit'>
                Submit
            </button>
        </form>
    );
};

export default ExpenseForm;
