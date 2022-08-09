import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("should filter TEXT", () => {
    const filter = { 
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
     };
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([ expenses[0], expenses[1] ])
});

test("should filter by start Date", () => {
    const filter = { 
        text: "",
        sortBy: "date",
        startDate: moment(0).subtract(2, "days"),
        endDate: undefined
     };
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});


test("should filter by end Date", () => {
    const filter = { 
        text: "",
        sortBy: "date",
        startDate: moment(0).subtract(2, "days"),
        endDate: moment(0).add(2, "days")
     };
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([ expenses[1] ]);
});

test("should sort by date", () => {
    const filter = { 
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
     };
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual(expenses);
});

test("should sort by date", () => {
    const filter = { 
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
     };
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ]);
});


