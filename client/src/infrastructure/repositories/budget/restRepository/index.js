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

  // TODO manage pagination
  getAll(page = 0, size = 20, context) { // eslint-disable-line no-unused-vars
    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/budgetLines`,
      headers: {
        Authorization: context.token,
      },
    }).then(response => {
      return response.data.map(BudgetAdapter.adapt);
    });
  }

  upsert(budget, context) {
    if (context.budgetId) {
      return this.update(budget, context);
    }

    return this.create(budget, context);
  }

  update(budgetToUpdate, context) {
    return axios({
      method: 'put',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/budgetLines/${context.budgetId}`,
      headers: {
        Authorization: context.token,
      },
      data: budgetToUpdate,
    }).then(response => {
      return BudgetAdapter.adapt(response.data);
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
