'use strict';

const budgetRepository = require('../../core/repositories/budget/BudgetInMemoryRepository'); // TODO get repository depending on start up environement

class BudgetService {
  constructor(repository) {
    this.repository = repository;
  }

  getBudgets() {
    return this.repository.getAllBudgetLines();
  }

  getBudget(budgetLineId) {
    return this.repository.getBudgetLineById(budgetLineId);
  }

  // TODO add expenses management
}

module.exports = new BudgetService(budgetRepository);
