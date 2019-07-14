const budgetService = require('../../core/budgetsService');
const template = require('./index.marko');

exports.paths = '/budget/:id';

exports.handler = async (input, out) => {
    const budget = await budgetService.getBudget(input.params.id);
    template.render({ budget }, out);
};