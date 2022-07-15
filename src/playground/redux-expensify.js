import { createStore, combine, combineReducers } from "redux";

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

// created this variable because the array can get longer with many objects
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const filtersReducer = (state = {}, action) => {
    
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
}))

console.log(store.getState());