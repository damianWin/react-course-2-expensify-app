import { createStore } from "redux";

// const add = ({ a, b }, c) => {
//         return a + b + c;
// }

// console.log(add({ a: 1, b: 2}, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy: incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
})

const setCount = ({count = 1} = {}) => ({
    type: "SET",
    count: count
})

const resetCount = () => ({
    type: "RESET"
})

// Reducer


const countReducer = (state = { count : 0}, action) => {
    switch (action.type) {
        case "INCREMENT" : 
            // const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
            count: state.count + action.incrementBy
        };
        case "DECREMENT" : 
            return {
            count: state.count - action.decrementBy
        }
        case "SET" : 
            return {
            count:  action.count
        }
        case "RESET" : 
            return {
            count:  0
        }
        default :
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log("console.log(store.getState().count): ", store.getState().count);
})


store.dispatch(incrementCount({ incrementBy: 5}))



store.dispatch(incrementCount());

store.dispatch(resetCount({}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount());

store.dispatch(setCount( {count: 101}));

unsubscribe();