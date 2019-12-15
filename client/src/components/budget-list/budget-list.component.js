'use strict';

const jsCookie = require('js-cookie');

const budgetRepository = require('../../infrastructure/repositories/budget');
const navigationService = require('../../infrastructure/ui/navigationService');

module.exports = class {
  async delete(budgetlineId, event) {
    event.stopPropagation();
    // TODO move this logic into a dedicated service
    // to keep this component KISS
    await budgetRepository.delete(budgetlineId, {
      userId: jsCookie.get('userId'),
      token: jsCookie.get('token'),
    });

    navigationService.navigate('/budgets');
  }
};
