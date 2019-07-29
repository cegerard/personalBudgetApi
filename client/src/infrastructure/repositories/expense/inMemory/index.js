'use strict';
const { isEmpty, has } = require('lodash');

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
          budgetLine: '2'
        },
        2: {
          _id: 2,
          name: 'travaux',
          date: new Date('2019-03-10').toISOString(),
          amount: 680,
          type: 'card',
          comment: 'Changement de la fenêtre de la buanderie',
          budgetLine: '2'
        },
        3: {
          _id: 3,
          name: 'course',
          date: new Date('2019-07-10').toISOString(),
          amount: 74,
          type: 'card',
          comment: 'Course pour le diner',
          budgetLine: '1'
        },
      },
    };
  }

  getById(expenseId) {
    return Adapter.adapt(this.data.expenses[expenseId]);
  }

  getAll(page = 0, size = 20) {
    // TODO manage pagination
    const adaptedExpenses = Object.values(this.data.expenses).map(async expense => {
      return await Adapter.adapt(expense);
    });
    return Promise.all(adaptedExpenses)
      .then(values => {
        return values;
      });
  }

  search(filter = {}) {
    // Validate filter
    if(!isEmpty(filter) && !has(filter, 'budgetLine')) {
      throw new Error('Only budgetline filter is allowed');
    }

    // filter expenses based on filter parameter
    const filteredExpenses = Object.values(this.data.expenses).filter((expense) => {
      if(has(filter, 'budgetLine')) {
        return expense.budgetLine === filter.budgetLine;
      }
      return true;
    });

    // Adapt expenses
    const adaptedExpenses = filteredExpenses.map(async (expense) => {
      return await Adapter.adapt(expense);
    });

    return Promise.all(adaptedExpenses)
      .then(values => {
        return values;
      });
  }
}

module.exports = new ExpenseInMemoryRepository();
