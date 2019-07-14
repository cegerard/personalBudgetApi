const budgetService = require('../../infrastructure/budgetsService');
const template = require('./index.marko');

exports.paths = '/budgets/:id';

exports.handler = async (input, out) => {
    const budget = await budgetService.getBudget(input.params.id);
    template.render({ budget }, out);
};