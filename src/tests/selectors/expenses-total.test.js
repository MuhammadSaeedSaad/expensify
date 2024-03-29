import getExpensesTotal from "../../selectors/expenses-total";
import moment from "moment";

const expenses = [
    {
        id: "1",
        description: "Gum",
        note: "",
        amount: 195,
        createdAt: 0
    }, {
        id: "2",
        description: "Rent",
        note: "",
        amount: 109500,
        createdAt: moment(0).subtract(4, "days").valueOf()
    }, {
        id: "3",
        description: "Credit Card",
        note: "",
        amount: 4500,
        createdAt: moment(0).add(4, "days").valueOf()
    }
];

test("should return 0 if not expenses", () => {
    const sum = getExpensesTotal([]);
    expect(sum).toBe(0);
});

test("should correctly add up a single expense", () => {
    const sum = getExpensesTotal([expenses[0]]);
    expect(sum).toBe(195);
});

test("should correctly add up multiple expenses", () => {
    const sum = getExpensesTotal(expenses);
    expect(sum).toBe(114195);
})