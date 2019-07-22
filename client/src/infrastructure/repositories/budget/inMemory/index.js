'use strict';

const Adapter = require('./BudgetAdapter');
const Repository = require('../../Repository');

class BudgetInMemoryRepository extends Repository {
  constructor() {
    super('BudgetInMemoryRepository');
    this.data = {
      budgets: {
        1: {
          _id: 1,
          name: 'Car',
          budget: 850,
          description: 'All expenses related to cars',
          period: 'monthly',
          startDate: new Date('2019-05-01')
        },
        2: {
          _id: 2,
          name: 'Home',
          budget: 1500,
          description: 'All expenses related to home',
          period: 'fix',
          startDate: new Date('2019-03-07')
        }
      },
    };
  }

  getById(budgetId) {
    return Promise.resolve(Adapter.adapt(this.data.budgets[budgetId]));
  }

  getAll(page = 0, size = 20) {
    // TODO manage pagination
    const adaptedBudgets = Object.values(this.data.budgets).map(budget => {
      return Adapter.adapt(budget);
    });
    return Promise.resolve(adaptedBudgets);
  }
}

module.exports = new BudgetInMemoryRepository();
