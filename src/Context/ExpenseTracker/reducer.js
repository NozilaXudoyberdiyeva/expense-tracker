import { ADD_EXPENSE, EXPENSE_CATEGORY, EXPENSE_DELETE } from "./types";

const reducer = (state, action) => {
    if (action.type === EXPENSE_DELETE) {
        return {
            ...state,
            expenses: state.expenses.filter((exp) => exp.id !== action.payload),
        };
    } else if (action.type === EXPENSE_CATEGORY) {
        return {
            ...state,
            selectCategory: action.payload,
        };
    } else if (action.type === ADD_EXPENSE) {
        return {
            ...state,
            expenses: [...state.expenses, action.payload],
        };
    }
};

export default reducer;
