'use strict';

const Expense = require('../../../../domain/models/Expense');

const budgetRepository = require('../../budget');

module.exports = class ExpenseAdapter {
    /**
     * Transform an InMemoryRepository expense to a domain Expense instance 
     * @param {*} expense
     * @return {Expense} Domain Expense instance 
     */
    static async adapt(expense) {
        return new Expense(
            expense._id,
            expense.name,
            expense.amount,
            expense.budgetLine,
            expense.date,
            expense.type,
            expense.comment,
        );
    }
}