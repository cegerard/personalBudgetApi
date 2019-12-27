'use strict';

const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const budgetRepository = require('../../infrastructure/repositories/budget');
const expenseRepository = require('../../infrastructure/repositories/expense');

const template = require('./index.marko');

exports.paths = '/expenses/:id/edit';

exports.handler = async(input, out) => {
  const context = getUserSession(input.headers);
  const expense = await expenseRepository.getById(input.params.id, context);
  const fullbudgetList = await budgetRepository.getAll(0, 20, context);
  const budgetList = fullbudgetList.map(bl => {
    return {
      name: bl.name,
      id: bl.id,
    };
  });

  template.render({
    expense,
    budgetList,
  }, out);
};
