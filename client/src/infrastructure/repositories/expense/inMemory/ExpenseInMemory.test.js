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

  describe('search for expenses', () => {
    it('should throw error with bad filter', async () => {
      const filter = {
        badKey: true
      }

      try {
        await expenseRepository.search(filter)
      } catch (err) {
        expect(err.message).toEqual('Only budgetline filter is allowed')
      }
    });

    it('should get all expenses with no filter', async () => {
      const expenses = await expenseRepository.search();
      expect(expenses.length).toEqual(3);
    });

    it('should get expenses for a budget line', async () => {
      const filter = {
        budgetLine: '2'
      }

      const expenses = await expenseRepository.search(filter);
      expect(expenses.length).toEqual(2);
      expect(expenses[0].budgetLine).toEqual(filter.budgetLine);
      expect(expenses[1].budgetLine).toEqual(filter.budgetLine);
    });
  });
});
