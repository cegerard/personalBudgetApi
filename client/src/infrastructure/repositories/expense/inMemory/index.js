'use strict';

const Adapter = require('./ExpenseAdapter');
const Repository = require('../../Repository');

class ExpenseInMemoryRepository extends Repository {
  constructor() {
    super('ExpenseInMemoryRepository');
    this.data = {
      expenses: {
        1: {
          _id: 1,
          name: 'loyer',
          date: new Date('2019-04-04').toISOString(),
          amount: 780,
          type: 'transfer',
          comment: '',
          budgetLine: 2
        },
        2: {
          _id: 2,
          name: 'travaux',
          date: new Date('2019-03-10').toISOString(),
          amount: 680,
          type: 'card',
          comment: 'Changement de la fenêtre de la buanderie',
          budgetLine: 2
        },
      },
    };
  }

  getById(expenseId) {
    return Adapter.adapt(this.data.expenses[expenseId]);
  }

  getAll(page = 0, size = 20) {
    // TODO manage pagination
    const adaptedExpense = Object.values(this.data.expenses).map(async expense => {
      return await Adapter.adapt(expense);
    });
    return Promise.all(adaptedExpense)
      .then(values => {
        return values;
      });
  }
}

module.exports = new ExpenseInMemoryRepository();
