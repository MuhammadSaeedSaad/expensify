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


// expenses action generator
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ( { id = "" } = {} ) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
});

// created this variable because the array can get longer with many objects
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter((expense) => expense.id != action.id)
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
});

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            console.log("sort by date")
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
            console.log("sort by amount")
            return a.amount < b.amount ? 1 : -1;
        }
    });
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


