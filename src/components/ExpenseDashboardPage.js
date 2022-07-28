import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseList from "./ExpenseList";

// main page
const ExpenseDashboardPage = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;