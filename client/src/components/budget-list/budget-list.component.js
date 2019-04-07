'use strict';

const budgetService = require('../../core-service/budget/budgetsService');

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
  state.budgetList = await budgetService.getBudgets();
}
