'use strict';

const budgetRepository = require('../../infrastructure/repositories/budget');

module.exports = class {
  onCreate() {
    // Init component state
    this.state = {
      budgetList: [],
    };

    // Hydrate state
    syncBudgetList(this.state);
  }
};

async function syncBudgetList(state) {
  state.budgetList = await budgetRepository.getAllBudgetLines();
}
