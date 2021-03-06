import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css"
import { removeExpense } from "../actions/expensesAction";
import { connect } from "react-redux";

// const date = new Date();
const now = moment();
console.log("now: ", now.format("D MMM YYYY"))

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        }; 
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({
            note: note
        }))
        
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        console.log("amount: ", amount)
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
    }
    onDateChange = (createdAtt) => {
        if (createdAtt) {
            this.setState(() => ({
                createdAt: createdAtt
            })) 
        }

    };
    onFucusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmits = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: "please set stateh e"
            }))
        } else {
            this.setState(() => ({
                error: ""
            }))
            this.props.onSubmits({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmits}>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFucusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <button>Add expense</button>

            </form>
        </div>            
        )

    }
}

export default connect()(ExpenseForm);
