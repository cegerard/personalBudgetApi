'use strict';

const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const budgetRepository = require('../../infrastructure/repositories/budget');

const template = require('./index.marko');

exports.handler = async(input, out) => {
  const context = getUserSession(input.headers);
  const budgetList = await budgetRepository.getAll(0, 20, context);
  template.render({
    budgetList,
  }, out);
};
