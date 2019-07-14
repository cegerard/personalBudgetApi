'use strict';

/**
 * Epense model for client application
 */
module.exports = class Expense {
    constructor(id, name, amount, date = new Date(), budgetLineName ='', type = '', comment = '') {
        this.id = id;
        this.name = name,
        this.amount = amount;
        this.date = date;
        this.budgetLine = budgetLineName;
        this.type = type;
        this.comment = comment;
    }
}