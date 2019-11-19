'use strict';

let expenseRepository;

if ('production' === process.env.NODE_ENV) { // production
  expenseRepository = require('./restRepository');
} else { // development
  expenseRepository = require('./restRepository');
}

module.exports = expenseRepository;
