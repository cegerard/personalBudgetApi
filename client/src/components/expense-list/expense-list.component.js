'use strict';

const jsCookie = require('js-cookie');

const expenseRepository = require('../../infrastructure/repositories/expense');
const navigationService = require('../../infrastructure/ui/navigationService');

module.exports = class {
  async delete(expenseId, event) {
    event.stopPropagation();
    // TODO move this logic into a dedicated service
    // to keep this component KISS
    await expenseRepository.delete(expenseId, {
      userId: jsCookie.get('userId'),
      token: jsCookie.get('token'),
    });

    navigationService.navigate('/expenses');
  }
};
