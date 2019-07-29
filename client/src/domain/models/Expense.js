'use strict';

/**
 * Epense model for client application
 */
module.exports = class Expense {
    constructor(id, name, amount, budgetId, date = new Date().toISOString(), type = '', comment = '') {
        this.id = id;
        this.name = name,
        this.amount = amount;
        this.date = date;
        this.budgetLine = budgetId;
        this.type = type;
        this.comment = comment;
    }
}