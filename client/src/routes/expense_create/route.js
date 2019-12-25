'use strict';

const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const budgetRepository = require('../../infrastructure/repositories/budget');

const template = require('./index.marko');

exports.paths = '/expenses/create';

exports.handler = async(input, out) => {
  const context = getUserSession(input.headers);
  const fullbudgetList = await budgetRepository.getAll(0, 20, context);
  const budgetList = fullbudgetList.map(bl => {
    return {
      name: bl.name,
      id: bl.id,
    };
  });
  template.render({
    budgetList,
  }, out);
};
