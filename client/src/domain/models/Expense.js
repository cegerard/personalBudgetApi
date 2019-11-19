'use strict';

/**
 * Epense model for client application
 */
module.exports = class Expense {
  constructor(id, name, amount, budgetId, date, type = '', comment = '') {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date || new Date().toISOString();
    this.budgetLine = budgetId;
    this.type = type;
    this.comment = comment;
  }
};
