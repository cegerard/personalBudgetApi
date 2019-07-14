'use strict';

const Adapter = require('./BudgetAdapter');

class BudgetInMemoryRepository {
  constructor() {
    this.data = {
      budgets: {
        1: {
          _id: 1,
          name: 'Car',
          budget: 850,
          description: 'All expenses related to cars',
        },
        2: {
          _id: 2,
          name: 'Home',
          budget: 1500,
          description: 'All expenses related to home',
        },
      },
    };
  }

  getBudgetLineById(budgetId) {
    return Promise.resolve(Adapter.adapt(this.data.budgets[budgetId]));
  }

  getAllBudgetLines(page = 0, size = 20) {
    // TODO manage pagination
    const adaptedBudgets = Object.values(this.data.budgets).map(budget => {
      return Adapter.adapt(budget);
    });
    return Promise.resolve(adaptedBudgets);
  }

  update(budget) {
    throw 'Not implemented yet';
  }

  create(newBudget) {
    throw 'Not implemented yet';
  }

  delete(budgetId) {
    throw 'Not implemented yet';
  }
}

module.exports = new BudgetInMemoryRepository();
