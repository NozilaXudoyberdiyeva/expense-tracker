import React from "react";
import { Context as ExpenseContext } from "./Context/ExpenseTracker";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import {
    EXPENSE_CATEGORY,
    EXPENSE_DELETE,
} from "./Context/ExpenseTracker/types";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

const App = () => {
    const { dispatch, visibleExpenses, handleSubmit } =
        React.useContext(ExpenseContext);
    return (
        <div className='container'>
            <div className='mb-5'>
                <ExpenseForm onSubmit={(evt) => handleSubmit(evt)} />
            </div>
            <div className='mb-3'>
                <ExpenseFilter
                    onSelectCategory={(value) =>
                        dispatch({ type: EXPENSE_CATEGORY, payload: value })
                    }
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    dispatch({ type: EXPENSE_DELETE, payload: id })
                }
            />
        </div>
    );
};

export default App;
