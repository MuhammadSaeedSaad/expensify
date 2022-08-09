import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";

test("should test ExpenseList with array of Expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test("should test ExpenseList with an empty array", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});