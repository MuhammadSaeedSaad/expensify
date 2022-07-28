import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }

    render() {
        return (
        <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} />
            <select value={this.props.filters.sortBy} onChange={(e) => {
                console.log("e.target.value: " + e.target.value)
                if (e.target.value === "date") {
                    console.log("inside if value: " + e.target.value)
                    this.props.dispatch(sortByDate());
                } else if (e.target.value === "amount") {
                    console.log("inside if value: " + e.target.value)
                    this.props.dispatch(sortByAmount());
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);