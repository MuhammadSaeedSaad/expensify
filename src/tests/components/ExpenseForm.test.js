import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render Expense form correctly without data", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with sample data from fixtures", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with an error when submitted without data", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", { 
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})