'use strict';

const expenseRepository = require('../../infrastructure/repositories/expense');

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
  state.expenseList = await expenseRepository.getAll();
}
