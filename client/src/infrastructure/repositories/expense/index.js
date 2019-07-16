'use strict';

let expenseRepository;

if ('production' === process.env.NODE_ENV) { // production
    // TODO add loopback repository
    console.warn('\x1b[33mWARN: Production mode use in memory expense repository !\x1b[39m');
    expenseRepository = require('./inMemory');
} else { // development
    expenseRepository = require('./inMemory');
}

module.exports = expenseRepository;
