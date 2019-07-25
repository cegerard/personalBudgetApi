'use strict';

const Budget = require('./Budget');

describe('Budget', () => {
    const startDate = new Date().toISOString();
    let budget;

    beforeEach(() => {
        budget = new Budget(1, 'test', 100, 'description', 'Monthly', startDate);
    });

    it('should instanciate with default value', () => {
        expect(budget).toMatchObject({
            id: 1,
            name: 'test',
            budget: 100,
            description: 'description',
            startDate: startDate,
            period: 'Monthly',
            expenses: []
        });
    });

    it('should add an expense to a budget line', () => {
        const expense = {id: 1, name: 'plop', amout: 100};
        expect(budget.expenses.length).toEqual(0);
        budget.addExpense(expense);
        expect(budget.expenses.length).toEqual(1);
        expect(budget.expenses[0]).toMatchObject({id: 1, name: 'plop', amout: 100});
    });
});