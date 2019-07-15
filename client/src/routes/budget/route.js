const budgetRepository = require('../../infrastructure/repositories/budget');
const template = require('./index.marko');

exports.paths = '/budgets/:id';

exports.handler = async (input, out) => {
    const budget = await budgetRepository.getBudgetLineById(input.params.id);
    template.render({ budget }, out);
};