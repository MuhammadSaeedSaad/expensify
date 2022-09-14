import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";


export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            note: props.expense ? props.expense.note : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        };
    
    }
    // we defined the function this way to avoid losing the (this binding)
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {      // "!amount ||" to allow the user to delete the value
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        // this.setState(() => ({ note: e.target.value }));
        // this way is better than the commented one .. look vid (11.8)
        this.setState(() => ({ note: e.target.value }));
    }

    onDateChange = (createdAt) => {
        if (createdAt) {    // to prevent the user from deleting the value in the datebox
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "please provide description and amount" }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render () {
        return (
            <div>
                {this.state.error && <h4>{this.state.error}</h4>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="description" value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder="add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange} ></textarea>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}