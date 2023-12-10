import React from "react";
import reducer from "./reducer";
import { ADD_EXPENSE } from "./types";

const Context = React.createContext(null);

const initialState = {
    expenses: [
        { id: 1, description: "Milk", amount: 5, category: "Groceries" },
        { id: 2, description: "Milk", amount: 15, category: "Groceries" },
        { id: 3, description: "Milk", amount: 25, category: "Groceries" },
        { id: 4, description: "Milk", amount: 35, category: "Groceries" },
    ],
    selectCategory: "",
};

const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const visibleExpenses = state.selectCategory
        ? state.expenses.filter((exp) => exp.category === state.selectCategory)
        : state.expenses;

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const [description, amount, category] = evt.target.elements;

        dispatch({
            type: ADD_EXPENSE,
            payload: {
                id: state.expenses.length + 1,
                description: description.value.trim(),
                amount: amount.value.trim(),
                category: category.value.trim(),
            },
        });
    };
    return (
        <Context.Provider
            value={{ state, dispatch, visibleExpenses, handleSubmit }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
