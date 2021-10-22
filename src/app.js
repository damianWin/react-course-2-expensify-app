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


// const state = store.getState();
// const visibleExpenses = selectExpenses(state.expenses, state.filters); 

const jsx = (
    // The prop `store` is required in `Provider`
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));

