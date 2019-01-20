const budgetService = require('../../services/budgetsService');

module.exports = class {
    onCreate() {
        // Init compoenent state
        this.state = {
            budgetList: []
        };

        // Hydrate state
        syncBudgetList(this.state);
    }
}

async function syncBudgetList(state) {
    state.budgetList = await budgetService.getBudgets();
}