'use strict';

const {models} = require('../methods');

module.exports = (app) => {
  // Init nested queries
  const endUser = app.models.endUser;
  endUser.nestRemoting('budgetLines');

  // Init custom methods
  models.buildBudgetLineMethods(app);
};
