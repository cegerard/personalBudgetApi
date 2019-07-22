'use strict';

const Budget = require('../../../../domain/models/Budget');

module.exports = class BudgetAdapter {
    /**
     * Transform an InMemoryRepository budget to a domain Budget instance 
     * @param {*} budget
     * @return {Budget} Domain Budget instance 
     */
    static adapt(budget) {
        return new Budget(
            budget._id,
            budget.name,
            budget.budget,
            budget.description,
            budget.period,
            budget.startDate
        );
    }
}