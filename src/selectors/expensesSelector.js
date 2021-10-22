// get visible expenses

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate; 
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//         console.log("expenses.text.toLowerCase().includes(text):  ", expense.description.toLowerCase().includes(text));


//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === "date") {
//                 return a.createdAt < b.createdAt ? 1 : -1;
//         } else if (sortBy === "amount") {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     })
// }

import moment from "moment";

export default (expenses, filters) => {
    return expenses.filter((expense) => {
        const createdAtMoment= moment(expense.createdAt)
        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, "day") : true ;
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, "day") : true; 
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());


        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (filters.sortBy === "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
        } else if (filters.sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// imported at ExpenseList.js