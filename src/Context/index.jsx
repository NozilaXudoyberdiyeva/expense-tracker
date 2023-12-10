import React from "react";
import { Provider as ExpenseTrackerProvider } from "./ExpenseTracker";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            <ExpenseTrackerProvider>{children}</ExpenseTrackerProvider>
        </Context.Provider>
    );
};

export { Context, Provider };
