'use strict';

const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const budgetRepository = require('../../infrastructure/repositories/budget');
const expenseRepository = require('../../infrastructure/repositories/expense');

const template = require('./index.marko');

exports.paths = '/budgets/:id';

exports.handler = async(input, out) => {
  const context = getUserSession(input.headers);
  const budget = await budgetRepository.getById(input.params.id, context);
  const budgetExpenses = await expenseRepository.search({
    budgetLine: input.params.id,
  }, context);

  const totalExpense = budgetExpenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  budget.available = budget.budget - totalExpense;

  template.render({
    budget,
    budgetExpenses,
  }, out);
};
