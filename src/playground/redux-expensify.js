import { createStore, combineReducers } from "redux";
import uuid from "uuid";


// ADD_EXPENSE
const addExpense = (
    { 
        descriptione = "", 
        note = "", 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => ({
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description: descriptione,
            note,
            amount,
            createdAt
        }
});


// REMOVE_EXPENSE
const removeExpense = ({ ide } = {}) => ({
        type: "REMOVE_EXPENSE",
        id: ide
});


// EDIT_EXPENSE
const editExpense = (id, updatese) => ({
        type: "EDIT_EXPENSE",
        id ,
        updates: updatese
});


//////////////////

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text: text
})



// SORT_BY_DALE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date"

    
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
})

// SET_START_DATE
const setStartDate = (date) => ({
    type: "SET_START_DATE",
    startDate: date
})

// SET_END_DATE
const setEndDate = (date) => ({
    type: "SET_END_DATE",
    endDate: date
})

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
           return [...state, action.expense];
        case "REMOVE_EXPENSE":
            console.log("Remove::: STATE: ", state)
            return state.filter(({id}) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}


// Filters Reducers
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            console.log("filtreras: ");
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            console.log("amountt")
            return {
                ...state,
                sortBy: action.sortBy
            }
        case "SORT_BY_DATE":
            console.log("dateee")
            return {
                ...state,
                sortBy: action.sortBy
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

// timesamps


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log("text.toLowerCase():  ", text.toLowerCase());
        // console.log("expenses.text.toLowerCase().includes(text):  ", expense.description.toLowerCase().includes(text));


        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}


// store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    // console.log("STATEEE: ", state.expenses[0].text);
    console.log("visibleExpenses: ", visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ descriptione: "rent", amount: 100, createdAt: 1000 })); 
const expenseTwo = store.dispatch(addExpense({ descriptione: "coffee", amount: 200,createdAt: -1000  })); 
const expenseThree = store.dispatch(addExpense({ descriptione: "kanel", amount: 20,createdAt: 2000  })); 
// const expenseThree = store.dispatch(addExpense({  amount: 700 })); 

// store.dispatch(removeExpense({ ide: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 850}))

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter("e"));

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


////////////////







const demoState = {
    expenses: [{
        id: "wfee",
        descriptione: "Januari rent",
        note: "Final payment",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// console.log(demoState.expenses[0].id)