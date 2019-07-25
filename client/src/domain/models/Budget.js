'use strict';

/**
 * Budget model for the client application
 */
module.exports = class Budget {
    constructor(id, name, budget, description, period, startDate, expenses = []) {
        this.id = id;
        this.name = name;
        this.budget = budget;
        this.description = description;
        this.period = period;
        this.startDate = startDate;
        this.expenses = expenses;
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }
}