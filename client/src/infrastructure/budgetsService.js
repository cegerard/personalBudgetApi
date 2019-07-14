'use strict';

const budgetRepository = require('./repositories/budget/BudgetInMemoryRepository'); // TODO get repository depending on start up environement
const Budget = require('../domain/models/Budget');

class BudgetService {
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Get budgets list from budgetRepository
   * @return a list of domain Budget instance
   */
  async getBudgets() {
    const budgetList = await this.repository.getAllBudgetLines();
    const domainBudgetList = budgetList.map((bl) => {
      return new Budget(
        bl._id,
        bl.name,
        bl.budget,
        bl.description
      );
    });

    return domainBudgetList;
  }

  /**
   * Get a budget from budgetRepository
   * @returns domain Budget instance
   */
  async getBudget(budgetLineId) {
    const budget = await this.repository.getBudgetLineById(budgetLineId);
    return new Budget(
      budget._id,
      budget.name,
      budget.budget,
      budget.description
    )
  }

  // TODO add expenses management
}

module.exports = new BudgetService(budgetRepository);
