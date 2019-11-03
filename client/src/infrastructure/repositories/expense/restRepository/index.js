'use strict';

const axios = require('axios');
const jsCookie = require('js-cookie');
const { isEmpty, has } = require('lodash');

const ExpenseAdapter = require('./ExpenseAdapter');
const Repository = require('../../Repository');

class ExpenseRestRepository extends Repository {
  constructor() {
    super('ExpenseRestRepository');
  }

  getById(expenseId, context) {
    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/expenses/${expenseId}`,
      headers: {
        Authorization: context.token
      }
    }).then(response => {
      return ExpenseAdapter.adapt(response.data);
    });
  }

  getAll(page = 0, size = 20, context) {
    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/expenses`,
      headers: {
        Authorization: context.token
      }
    }).then(response => {
      return response.data.map(ExpenseAdapter.adapt)
    });
  }

  search(filter = {}, context) {
    // Validate filter
    if(!isEmpty(filter) && !has(filter, 'budgetLine')) {
      throw new Error('Only budgetline filter is allowed');
    }

    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/budgetLines/${filter.budgetLine}/expenses`,
      headers: {
        Authorization: context.token
      }
    }).then(response => {
      return response.data.map(ExpenseAdapter.adapt)
    });
  }
}

module.exports = new ExpenseRestRepository();
