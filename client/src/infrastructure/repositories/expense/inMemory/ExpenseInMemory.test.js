'use strict';

const expenseRepository = require('.');

describe('ExpenseInMemoryRepository', () => {
  describe('get a list of expenses', () => {
    it('should get a list with default parameters', async() => {
      const expenses = await expenseRepository.getAll();
      expect(expenses.length > 0).toBe(true);
    });

    // it('should get a list page size defined', async() => {
    //   const budgetLines = await budgetRepository.getAll(0, 2);
    //   expect(budgetLines.length).toEqual(2);
    // });
  });

  describe('get an expense', () => {
    it('should get an expense object', async () => {
      const expense = await expenseRepository.getById(1);
      expect(expense.id).toEqual(1);
    });
  });
});
