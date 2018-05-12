'use strict'

const { models } = require('../methods');

module.exports = (app) => {
    models.buildBudgetLineMethods(app);
};