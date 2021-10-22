import { createStore, combineReducers } from "redux";

const demoState = {
    expenses: [{
        id: "wfee",
        description: "Januari rent",
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
