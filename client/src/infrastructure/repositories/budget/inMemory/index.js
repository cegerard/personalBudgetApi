'use strict';

const uuidv4 = require('uuid/v4');
const store = require('store');

const Adapter = require('./BudgetAdapter');
const Repository = require('../../Repository');

class BudgetInMemoryRepository extends Repository {
  constructor() {
    super('BudgetInMemoryRepository');
    if(!store.get('budgets')) {
      store.set('budgets', {
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
      });
    }
  }

  getById(budgetId) {
    return Promise.resolve(Adapter.adapt(store.get('budgets')[budgetId]));
  }

  getAll(page = 0, size = 20) {
    // TODO manage pagination
    const adaptedBudgets = Object.values(store.get('budgets')).map(budget => {
      return Adapter.adapt(budget);
    });
    return Promise.resolve(adaptedBudgets);
  }

  create(newBudget) {
    const id = uuidv4();
    const budgets = store.get('budgets');
    newBudget._id = id;
    budgets[id] = newBudget;
    store.set('budgets', budgets);
  }
}

module.exports = new BudgetInMemoryRepository();
