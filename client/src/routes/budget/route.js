const budgetRepository = require('../../infrastructure/repositories/budget');
const expenseRepository = require('../../infrastructure/repositories/expense');
const template = require('./index.marko');

exports.paths = '/budgets/:id';

exports.handler = async (input, out) => {
    const budget = await budgetRepository.getById(input.params.id);
    const budgetExpenses = await expenseRepository.search({ budgetLine: input.params.id });
    template.render({ budget, budgetExpenses }, out);
};