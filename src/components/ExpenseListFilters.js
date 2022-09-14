import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        console.log("e.target.value: " + e.target.value)
        if (e.target.value === "date") {
            console.log("inside if value: " + e.target.value)
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            console.log("inside if value: " + e.target.value)
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
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

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);