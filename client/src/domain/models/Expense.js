'use strict';

/**
 * Epense model for client application
 */
module.exports = class Expense {
    constructor(id, name, amount, date = new Date(), budget = { name: 'NA' }, type = '', comment = '') {
        this.id = id;
        this.name = name,
        this.amount = amount;
        this.date = date;
        this.budgetLine = budget;
        this.type = type;
        this.comment = comment;
    }
}