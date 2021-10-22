import React from "react";
import { Link } from "react-router-dom";

// import { removeExpense } from "../actions/expensesAction";
// import { connect } from "react-redux";



const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    console.log("consollin: ", id, description, amount, createdAt),
    // must be called description, amount, createdAt
    <div className="expenseListItemer">
        <p> / expenselist item</p>
        <Link to={`/edit/${id}`}>
            <h3 >{ description }</h3>
        </Link>
        <p>Amount: {amount} - Created at: {createdAt}</p>


    </div>
)

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses 
//     }
// }

export default ExpenseListItem;

// imported at ExpenseList.js
 