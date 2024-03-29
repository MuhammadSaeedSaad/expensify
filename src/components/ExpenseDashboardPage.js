import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";

// main page
const ExpenseDashboardPage = (props) => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;