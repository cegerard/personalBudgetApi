'use strict';

let budgetRepository;
if ('production' === process.env.NODE_ENV) { // production
    // TODO add loopback repository
    console.warn('\x1b[33mWARN: Production mode use in memory budget repository !\x1b[39m');
    budgetRepository = require('./inMemory');
} else { // development
    budgetRepository = require('./inMemory');
}

module.exports = budgetRepository;