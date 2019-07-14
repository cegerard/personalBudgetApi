'use strict';

const expenseService = require('../../infrastructure/expenseService');

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
  state.expenseList = await expenseService.getExpenses();
}
