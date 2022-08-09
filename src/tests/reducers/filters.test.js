import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should test the default filter", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    const defaultState = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    };
    expect(state).toEqual(defaultState);
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
    expect(state.sortBy).toBe("date");
});

test("should test the SET_TEXT_FILTER", () => {
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "Rent" });
    expect(state.text).toBe("Rent");
});

test("should test the SET_START_DATE", () => {
    const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(0).add(1, "days") });
    expect(state.startDate).toEqual(moment(0).add(1, "days"));
});

test("should test the SET_END_DATE", () => {
    const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(0).add(1, "days") });
    expect(state.endDate).toEqual(moment(0).add(1, "days"));
});
