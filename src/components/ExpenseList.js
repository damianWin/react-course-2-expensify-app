import React from "react";
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem";
import expensesSelector from "../selectors/expensesSelector";

const ExpenseList = (props) => (
    // props commming from connect() I believe
    <div className="expenseLister">
       <h2>/ ExpenseList </h2>
       {props.expenses.map((ee) => {
            // return <ExpenseListItem key={ee.id} description={ee.description} amount={ee.amount} createdAt={ee.createdAt} id={ee.id} />
            return <ExpenseListItem key={ee.id} {...ee}/>
       })}
       <h2>ExpenseList /</h2>
    </div>
);


const mapStateToProps = (state) => {
    console.log("state FROM EXPENSELIST JS: ", state)
    return {
        // expensest: state.expenses,
        // filters: state.filters
        expenses: expensesSelector(state.expenses, state.filters) // This is what ends upp in dashboard
    }

}


export default connect(mapStateToProps)(ExpenseList);

//  ExpenseList is connected to the Redux store 
// ...and imported to Dashboard