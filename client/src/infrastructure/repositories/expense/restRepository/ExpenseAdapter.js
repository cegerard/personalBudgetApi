'use strict';

const Expense = require('../../../../domain/models/Expense');

module.exports = class ExpenseAdapter {
    /**
     * Transform an InMemoryRepository expense to a domain Expense instance 
     * @param {*} expense
     * @return {Expense} Domain Expense instance 
     */
    static adapt(expense) {
        return new Expense(
            expense.id,
            expense.name,
            expense.amount,
            expense.budgetLine,
            expense.date,
            expense.type,
            expense.comment,
        );
    }
}