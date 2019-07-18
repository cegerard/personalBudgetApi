'use strict';

const budgetRepository = require('.');

describe('BudgetInMemoryRepository', () => {
  describe('get a list of budget lines', () => {
    it('should get a list with default parameters', async() => {
      const budgetLines = await budgetRepository.getAll();
      expect(budgetLines.length > 0).toBe(true);
    });

    // it('should get a list page size defined', async() => {
    //   const budgetLines = await budgetRepository.getAll(0, 2);
    //   expect(budgetLines.length).toEqual(2);
    // });
  });

  describe('get a budget line', () => {
    it('should get a budget line object', async () => {
      const budgetLine = await budgetRepository.getById(1);
      expect(budgetLine.id).toEqual(1);
    });
  });
});
