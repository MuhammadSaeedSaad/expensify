import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import { SingleDatePicker } from "react-dates";

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
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", { 
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").at(0).simulate("change", { target: { value: "new description" } });
    expect(wrapper.state("description")).toBe("new description");
    expect(wrapper).toMatchSnapshot();
});

test("should set note on textarea change", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("textarea").simulate("change", { target: { value: "some text for note" } });
    expect(wrapper.state("note")).toBe("some text for note");
    expect(wrapper).toMatchSnapshot();
});

test("should set amount if valid input", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").at(1).simulate("change", { target: { value: "23.50" } });
    expect(wrapper.state("amount")).toBe("23.50");
    expect(wrapper).toMatchSnapshot();
});

test("should set amount if valid input", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").at(1).simulate("change", { target: { value: "12.122" } });
    expect(wrapper.state("amount")).toBe("");
    expect(wrapper).toMatchSnapshot();
});

// introduction test spies
test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    // onSubmit={onSubmitSpy} will make onSubmit refer to the onSubmitSpy meaning that whenever onSubmit() get called onSubmitSpy() will get called.
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(wrapper.state("error")).toBe("");
    // note: the values passed as object here are the overall evaluated values
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt,
        note: expenses[1].note
    });
});


test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calender focus on change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused: true });
    expect(wrapper.state("calenderFocused")).toBe(true);
});