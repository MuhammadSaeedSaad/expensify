import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                this is from my add expense component
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
