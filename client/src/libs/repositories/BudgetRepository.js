const context = require('../contexts');

const BUDGET_COL = "budgets";

class BudgetRepository {
    constructor() {
        this.context = context;
        this.context.addStore(BUDGET_COL, [ // TODO remove hard coded init
            {
                id: 1,
                name: 'Car',
                budget: 850,
                description: 'All expenses related to cars'
            },
            {
                id: 2,
                name: 'Home',
                budget: 1500,
                description: 'All expenses related to home'
            },
        ]);
    }

    setContext(sourceContext) {
        this.context = sourceContext;

        return this
    }

    getById(budgetId) {
        return this.context.getOne(budgetId);
    }

    async getAll(page = 0, size = 20){
        return await this.context.getAll(BUDGET_COL,page, size);
    }

    update(budget) {
        return this.context.update(budget.id, budget);
    }

    create(newBudget) {
        return this.context.create(newBudget);
    }

    delete(budgetId) {
        return this.context.delete(budgetId);
    }
}

module.exports = new BudgetRepository();