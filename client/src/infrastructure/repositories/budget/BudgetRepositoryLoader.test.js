'use strict'

describe('BudgetRepositoryLoader', () => {
    it('should select the production repository', () => {
        process.env.NODE_ENV = 'production';
        expect(require('.').name).toEqual('BudgetInMemoryRepository');
    });

    it('should select the default repository', () => {
        expect(require('.').name).toEqual('BudgetInMemoryRepository');
    });
});