import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
    <div className="dashboarder">
        <h2 >/ dashboarder</h2>
         
        <ExpenseListFilters />
        <ExpenseList />
        <h2 >dashboarder /</h2>
    </div>
);

export default ExpenseDashboardPage;

// imported at AppRouter.js