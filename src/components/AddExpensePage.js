import React from "react";
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expensesAction"


const AddExpensePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmits={(expense) => {
                    console.log("expense from add  expense", expense);
                    console.log("props from add  expense", props);
                        props.dispatch(addExpense(expense))
                        props.history.push("/")
                    }}
            />
        </div>
    )
};

export default connect()(AddExpensePage);
