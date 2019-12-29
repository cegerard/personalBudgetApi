'use strict';

const axios = require('axios');
const {
  isEmpty,
  has,
} = require('lodash');

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
        Authorization: context.token,
      },
    }).then(response => {
      return ExpenseAdapter.adapt(response.data);
    });
  }

  getAll(page = 0, size = 20, context) { // eslint-disable-line no-unused-vars
    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/expenses`,
      headers: {
        Authorization: context.token,
      },
    }).then(response => {
      return response.data.map(ExpenseAdapter.adapt);
    });
  }

  search(filter = {}, context) {
    // Validate filter
    if (!isEmpty(filter) && !has(filter, 'budgetLine')) {
      throw new Error('Only budgetline filter is allowed');
    }

    return axios({
      method: 'get',
      url: `${this.config.baseUrl}/budgetLines/${filter.budgetLine}/expenses`,
      headers: {
        Authorization: context.token,
      },
    }).then(response => {
      return response.data.map(ExpenseAdapter.adapt);
    });
  }

  upsert(expense, context) {
    if (context.expenseId) {
      return this.update(expense, context);
    }

    return this.create(expense, context);
  }

  update(expenseToUpdate, context) {
    return axios({
      method: 'put',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/expenses/${context.expenseId}`,
      headers: {
        Authorization: context.token,
      },
      data: expenseToUpdate,
    }).then(response => {
      return ExpenseAdapter.adapt(response.data);
    });
  }

  create(newExpense, context) {
    return axios({
      method: 'post',
      url: `${this.config.baseUrl}/budgetLines/${newExpense.budgetLine}/expenses`,
      headers: {
        Authorization: context.token,
      },
      data: newExpense,
    }).then(response => {
      return ExpenseAdapter.adapt(response.data);
    });
  }

  delete(expenseId, context) {
    return axios({
      method: 'delete',
      url: `${this.config.baseUrl}/endUsers/${context.userId}/expenses/${expenseId}`,
      headers: {
        Authorization: context.token,
      },
    }).then(() => {
      return expenseId;
    });
  }
}

module.exports = new ExpenseRestRepository();
