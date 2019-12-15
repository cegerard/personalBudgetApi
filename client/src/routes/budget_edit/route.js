'use strict';

const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const budgetRepository = require('../../infrastructure/repositories/budget');

const template = require('./index.marko');

exports.paths = '/budgets/:id/edit';

exports.handler = async(input, out) => {
  const context = getUserSession(input.headers);
  const budget = await budgetRepository.getById(input.params.id, context);

  template.render({
    budget,
  }, out);
};
