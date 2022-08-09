import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should test the expenses reducer with default value", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove and expense with an id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test("should not remove and expense when id doesn't match existing one", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add and expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            description: "test",
            amount: 1111111,
            createdAt: moment(0).valueOf(),
            note: "test note"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense with its id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        update: { description: "Rent Edited" }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe("Rent Edited");
});

test("should not edit an expense when id doesn't match", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        update: { description: "Rent Edited" }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});