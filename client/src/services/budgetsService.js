const budgetRepository = require('../repositories/BudgetInMemoryRepository'); // TODO get repository depending on start up environement

class BudgetService {
    constructor(repository) {
        this.repository = repository;
    }

    async getBudgets() {
        return await this.repository.getAllBudgetLines();
    }

    async getBudget(budgetLineId) {
        return await this.repository.getBudgetLineById(budgetLineId);
    }

    // TODO add expenses management
}

module.exports = new BudgetService(budgetRepository);