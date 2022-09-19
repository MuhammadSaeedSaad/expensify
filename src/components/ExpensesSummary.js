import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";


export const ExpensesSummary = (props) => (
    <div>
        { 
            props.expenses.length === 1 ?
            (<h1>Viewing 1 expense total {getExpensesTotal(props.expenses)}</h1>) : 
            (<h1>Viewing {props.expenses.length} expenses total is {numeral(getExpensesTotal(props.expenses) / 100).format("$0,0.00")}</h1>)
        }
    </div>
);

const mapStateToDispatch = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToDispatch)(ExpensesSummary);