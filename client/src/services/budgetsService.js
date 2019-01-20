const budgetRepository = require('../libs/repositories/BudgetRepository');

class BudgetService {
    constructor(repository) {
        this.repository = repository;
    }

    async getBudgets() {
        return await this.repository.getAll();
    }
}

module.exports = new BudgetService(budgetRepository);