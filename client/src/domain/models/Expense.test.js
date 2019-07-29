'use strict';

const Expense = require('./Expense');

describe('Expense', () => {
    it('should instanciate with default value', () => {
        const expense = new Expense(1, 'test', 100, '2');
        expect(expense).toMatchObject({
            id: 1,
            name: 'test',
            amount: 100,
            date: expect.any(String),
            budgetLine: '2',
            type: '',
            comment: ''
        });
    });
});