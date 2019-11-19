'use strict';

const axios = require('axios');

const Repository = require('../../Repository');
const BudgetAdapter = require('./BudgetAdapter');

class BudgetRestRepository extends Repository {
  constructor() {
    super('BudgetRestRepository');
  }

  getById(budgetId, context) {
    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/budgetLines/${budgetId}`,
      headers: {
        Authorization: context.token,
      },
    }).then(response => {
      return BudgetAdapter.adapt(response.data);
    });
  }

  getAll(page = 0, size = 20, context) { // eslint-disable-line no-unused-vars
    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/endUsers//${context.userId}/budgetLines`,
      headers: {
        Authorization: context.token,
      },
    }).then(response => {
      return response.data.map(BudgetAdapter.adapt);
    });
  }

  create(newBudget, context) {
    return axios({
      method: 'post',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/budgetLines`,
      headers: {
        Authorization: context.token,
      },
      data: newBudget,
    }).then(response => {
      return BudgetAdapter.adapt(response.data);
    });
  }
}

module.exports = new BudgetRestRepository();
