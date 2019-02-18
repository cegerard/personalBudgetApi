const budgetRepository = require('./BudgetInMemoryRepository');

describe('BudgetInMemoryRepository', () => {
    describe('get a list of budget lines', () => {
        it('should get a list with default parameters', async () => {
            const budgetLines = await budgetRepository.getAllBudgetLines();
            expect(budgetLines.length > 0).toBe(true);
        });

        it('should get a list page size defined', async () => {
            const budgetLines = await budgetRepository.getAllBudgetLines(0, 2);
            expect(budgetLines.length).toEqual(2);
        }); 
    });
});