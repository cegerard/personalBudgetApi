'use strict';

class ExpenseInMemoryRepository {
  constructor() {
    this.data = {
      expenses: {
        1: {
          _id: 1,
          name: 'loyer',
          date: new Date('2019-04-04'),
          amount: 780,
          type: 'transfer',
          comment: '',
          budgetLine: 2
        },
        2: {
          _id: 2,
          name: 'travaux',
          date: new Date('2019-03-10'),
          amount: 680,
          type: 'card',
          comment: 'Changement de la fenêtre de la buanderie',
          budgetLine: 2
        },
      },
    };
  }

  getExpenseById(expenseId) {
    return Promise.resolve(this.data.expenses[expenseId]);
  }

  getAllExpenses(page = 0, size = 20) {
    // TODO manage pagination
    return Promise.resolve(Object.values(this.data.expenses));
  }

  update(expense) {
    throw 'Not implemented yet';
  }

  create(newExpense) {
    throw 'Not implemented yet';
  }

  delete(expenseId) {
    throw 'Not implemented yet';
  }
}

module.exports = new ExpenseInMemoryRepository();
