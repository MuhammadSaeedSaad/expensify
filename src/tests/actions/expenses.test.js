import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set the action object to remove an expense", () => {
    const result = removeExpense({ id: "123ABC"});
    expect(result).toEqual({ type: "REMOVE_EXPENSE", id: "123ABC"});
});

test("should set the action object to edit an expense", () => {
    const result = editExpense("123ABC", { note: "some note" });
    expect(result).toEqual({ type: "EDIT_EXPENSE", id: "123ABC", update: { note: "some note" } });
})

test("should set the action object to add expense with a provided value", () => {
    const action = addExpense({ description: "Rent", amount: 1000, createdAt: 1000, note: "some note" });
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "Rent",
            amount: 1000,
            createdAt: 1000,
            note: "some note"
        }
    });
});

test("should set the action object to add expense with the default value", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createdAt: 0,
            note: ""
        }
    })
})