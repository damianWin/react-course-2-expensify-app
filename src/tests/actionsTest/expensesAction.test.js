import { addExpense, editExpense, removeExpense } from "../../actions/expensesAction";

test("Should set up remove expense action object", () => {
    const acion = removeExpense({ id: "123abc" }); 
    expect(acion).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("Should edit expense action object", () => {
    const action = editExpense("123eee", { note: "new note value" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123eee",
        updates: {
            note: "new note value"
        }
        
    }) 
})

test("should setup add ecpens with PROVIDED values", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last months rent"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("should setup add ecpens with DEFAULT values", () => {
    const expenseData = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ""
    }
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String),

        }
    })
})