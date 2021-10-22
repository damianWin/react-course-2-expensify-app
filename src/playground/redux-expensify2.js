import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpo = ({ namn,pris, vikt, viktEnhet }) => ({
    type: "ADD",
    ingredient: {
        namn: namn,
        pris: pris,
        vikt: vikt,
        viktEnhet: viktEnhet
    }
})

const expoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.ingredient]; 
        default:
            return state;
    }
    
}

const comboFunk = combineReducers({
    eeeeeexpoReducer: expoReducer
})

const store = createStore(comboFunk)
store.dispatch(addExpo({ namn: "kakao", pris: 500, vikt: 300, viktEnhet: "gram" }))
store.dispatch(addExpo({ namn: "kanel", pris: 200, vikt: 50, viktEnhet: "gram" }))

console.log("console.log(store.getState()): ",store.getState())