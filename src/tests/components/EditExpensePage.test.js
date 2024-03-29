import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import ExpenseForm from "../../components/ExpenseForm";


let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]} />);
})

test("should render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should test editExpense", () => {
    wrapper.find(ExpenseForm).prop("onSubmit")(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle removeExpense", () => {
    wrapper.find("button").simulate("click");
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(history.push).toHaveBeenLastCalledWith("/");
});