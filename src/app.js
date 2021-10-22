import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense, removeExpense } from "./actions/expensesAction";
import { setTextFilter } from "./actions/filtersAction";
import selectExpenses from "./selectors/expensesSelector"
// import { removeExpense } from "../actions/expensesAction";


/////////////////////////////////////////////

const store = configureStore(); // combineReducers

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 10000000 }));
store.dispatch(addExpense({ description: "rent", amount: 100000, createdAt: 10006 }))
// store.dispatch(removeExpense({ descriptione: "mobile bill", amount: 1000}))
// store.dispatch(setTextFilter("Vi testar va")) ????


const state = store.getState();
const visibleExpenses = selectExpenses(state.expenses, state.filters); 
// selectExpenses(expenses, { text, sortBy, startDate, endDate })
console.log(`state.expenses: `)
console.log( state.expenses) 

console.log(`state.filters: `)
console.log(state.filters)

console.log("visibleExpenses: ", visibleExpenses);


console.log("store.getState() at app.js: ", store.getState());

const jsx = (
    // The prop `store` is required in `Provider`
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));

