import { createStore, combine, combineReducers } from "redux";
import uuid from "uuid";

const demoState = {
    expenses: [{
        id: "lasdjfioa",
        description: "Junary rent",
        note: "this is a note to pay the rent",
        amount: 565656,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",   // data or amount
        startDate: undefined,
        endDate: undefined
    }
}












store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOneAction = store.dispatch(addExpense({ description: "rent", amount: 500, createdAt: 20, note: "renty rent" }));
const expenseTwoAction = store.dispatch(addExpense({ description: "Coffe", amount: 50, createdAt: 40, note: "Coffe Coffy" }));
// const expenseThreeAction = store.dispatch(addExpense({ description: "Three", amount: 33, createdAt: 3, note: "Three Three" }));
// store.dispatch(removeExpense({ id: expenseOneAction.expense.id}));
// store.dispatch(editExpense(expenseTwoAction.expense.id, { amount: 1000 }));
// store.dispatch(setTextFilter("coffe"));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(45));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(50));


