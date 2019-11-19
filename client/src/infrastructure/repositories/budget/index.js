'use strict';

let budgetRepository;
if ('production' === process.env.NODE_ENV) { // production
  budgetRepository = require('./restRepository');
} else { // development
  budgetRepository = require('./restRepository');
}

module.exports = budgetRepository;
