'use strict';

const expenseRepository = require('../../infrastructure/repositories/expense/ExpenseInMemoryRepository');

module.exports = class {
  onCreate() {
    // Init component state
    this.state = {
      expenseList: [],
    };

    // Hydrate state
    syncExpenseList(this.state);
  }
};

async function syncExpenseList(state) {
  state.expenseList = await expenseRepository.getAllExpenses();
}
